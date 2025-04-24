from flask import Flask, render_template, request, redirect, url_for, send_from_directory
import os
import pandas as pd
import numpy as np
import plotly.graph_objects as go
from ydata_profiling import ProfileReport

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './uploads'
app.config['REPORT_FOLDER'] = './reports'
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
os.makedirs(app.config['REPORT_FOLDER'], exist_ok=True)

# Route: Home Page
@app.route('/')
def home():
    return render_template('index.html')

# Route: Upload CSV
@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        file = request.files['file']
        if file and file.filename.endswith('.csv'):
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
            file.save(file_path)
            return redirect(url_for('generate_reports', filename=file.filename))
    return render_template('upload.html')

# Route: Generate Reports
@app.route('/generate/<filename>')
def generate_reports(filename):
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    data = pd.read_csv(file_path)

    # Generate Profile Report
    profile = ProfileReport(data, title=f"{filename} Profile Report")
    profile_path = os.path.join(app.config['REPORT_FOLDER'], f"{filename}_profile.html")
    profile.to_file(profile_path)

    # Generate Radar Report
    data['Datetime'] = pd.to_datetime(data['Date'] + 'T' + data['Time'] + 'Z')
    data.set_index('Datetime', inplace=True)
    data.drop(['Date', 'Time'], axis=1, inplace=True)

    columns = ['Step Count (steps)', 'Exercise Minutes (minutes)', 'Mindfulness Minutes (minutes)',
               'Deep Sleep (%)', 'REM Sleep (%)', 'Respiratory Rate (breaths/min)', 'Heart Rate (bpm)']
    data = data[columns]

    weekly_data = data.groupby(pd.Grouper(freq='W')).agg({
        'Step Count (steps)': 'sum',
        'Exercise Minutes (minutes)': 'sum',
        'Mindfulness Minutes (minutes)': 'sum',
        'Deep Sleep (%)': 'mean',
        'REM Sleep (%)': 'mean',
        'Respiratory Rate (breaths/min)': 'mean',
        'Heart Rate (bpm)': 'mean'
    })

    healthy_reference = {
        'Step Count (steps)': 70000,
        'Exercise Minutes (minutes)': 210,
        'Mindfulness Minutes (minutes)': 77,
        'Deep Sleep (%)': 20,
        'REM Sleep (%)': 25,
        'Respiratory Rate (breaths/min)': 20,
        'Heart Rate (bpm)': 70
    }

    normalized_weekly_data = weekly_data.copy()
    for column in columns:
        if column == 'Respiratory Rate (breaths/min)':
            normalized_weekly_data[column] = np.where(
                (normalized_weekly_data[column] >= 8) & (normalized_weekly_data[column] <= 22), 1,
                np.where(
                    (normalized_weekly_data[column] > 22) & (normalized_weekly_data[column] <= 26), 0.7, 0.2
                )
            )
        elif column == 'Heart Rate (bpm)':
            normalized_weekly_data[column] = np.where(
                (normalized_weekly_data[column] >= 65) & (normalized_weekly_data[column] <= 80), 1,
                np.where(
                    (normalized_weekly_data[column] >= 50) & (normalized_weekly_data[column] < 65), 0.7,
                    np.where(
                        (normalized_weekly_data[column] > 80) & (normalized_weekly_data[column] <= 120), 0.4, 0.2
                    )
                )
            )
        else:
            normalized_weekly_data[column] = weekly_data[column] / healthy_reference[column]

    normalized_weekly_data = normalized_weekly_data.clip(lower=0.1, upper=0.9)

    columns_mapping = {
        'Step Count (steps)': 'Active Lifestyle',
        'Exercise Minutes (minutes)': 'Fitness Enthusiasm',
        'Mindfulness Minutes (minutes)': 'Mindful Presence',
        'Deep Sleep (%)': 'Restful Sleeper',
        'REM Sleep (%)': 'Creative Dreamer',
        'Respiratory Rate (breaths/min)': 'Calm Breather',
        'Heart Rate (bpm)': 'Healthy Heart'
    }

    normalized_weekly_data.rename(columns=columns_mapping, inplace=True)
    columns = list(columns_mapping.values())
    averages = normalized_weekly_data.mean()

    fig = go.Figure()
    fig.add_trace(go.Scatterpolar(
        r=averages.values,
        theta=columns,
        fill='toself',
        name=f'{filename}'
    ))

    fig.update_layout(
        polar=dict(
            radialaxis=dict(
                visible=True,
                range=[0, 1.2]
            )
        ),
        title=f"Radar Graph for {filename}'s Positive Traits"
    )

    radar_path = os.path.join(app.config['REPORT_FOLDER'], f"{filename}_radar.html")
    fig.write_html(radar_path)

    return redirect(url_for('view_reports'))

# Route: View Reports
@app.route('/reports')
def view_reports():
    reports = os.listdir(app.config['REPORT_FOLDER'])
    return render_template('reports.html', reports=reports)

# Route: Serve Report Files
@app.route('/reports/<filename>')
def serve_report(filename):
    return send_from_directory(app.config['REPORT_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)