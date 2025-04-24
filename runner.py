import pandas as pd
import numpy as np
import os

import plotly.express as px
import plotly.graph_objects as go

from ydata_profiling import ProfileReport

data = None

for file in (os.listdir(os.getcwd() + '/data')):


    if ('.csv' in file and 1 == 0):
        file_content = pd.read_csv(os.getcwd() + '/data/' + file)
        file_content['Datetime'] = pd.to_datetime(file_content['Date'] + 'T' + file_content['Time'] + 'Z')
        file_content.set_index('Datetime', inplace=True)
        file_content.drop(['Date', 'Time'], axis=1, inplace=True)
        print(file_content.head())
        # profile= ProfileReport(file_content, tsmode=True, sortby='', title=f'{file} EDA')
        # profile.to_file(f'{file}_EDA.html')
        fig = px.line_polar(file_content, r=file_content.columns[0], theta=file_content.index, line_close=True)
        fig.write_html(f'{file}_polar_plot.html')  # Corrected method to save the figure

    if '.csv' in file and 1 == 1:
        data = pd.read_csv(os.getcwd() + '/data/' + file)
        # print(data.head())
        data['Datetime'] = pd.to_datetime(data['Date'] + 'T' + data['Time'] + 'Z')
        data.set_index('Datetime', inplace=True)
        data.drop(['Date', 'Time'], axis=1, inplace=True)

        # Select relevant columns (exclude 'Datetime' since it's now the index)
        columns = ['Step Count (steps)', 'Exercise Minutes (minutes)', 'Mindfulness Minutes (minutes)',
                   'Deep Sleep (%)', 'REM Sleep (%)', 'Heart Rate (bpm)']
        data = data[columns]

        # Group data by week and calculate weekly averages
        weekly_data = data.groupby(pd.Grouper(freq='W')).sum()
        # weekly_data = data.groupby(pd.Grouper(freq='W')).mean()

        # Normalize the weekly data based on healthy reference values
        healthy_reference = {
            'Step Count (steps)': 70000,  # Average weekly steps
            'Exercise Minutes (minutes)': 210,  # Recommended weekly exercise
            'Mindfulness Minutes (minutes)': 77,  # Suggested mindfulness duration
            'Deep Sleep (%)': 20,  # Percentage of total sleep
            'REM Sleep (%)': 25,  # Percentage of total sleep
            'Heart Rate (bpm)': 70  # Average resting heart rate
        }

        normalized_weekly_data = weekly_data.copy()

        for column in columns:
            if column == 'Heart Rate (bpm)':
                # Normalize heart rate: closer to 70 is 1, higher values are closer to 0
                normalized_weekly_data[column] = 1 - abs(weekly_data[column] - healthy_reference[column]) / healthy_reference[column]
            else:
                # Normalize other columns: values closer to the target are 1
                normalized_weekly_data[column] = weekly_data[column] / healthy_reference[column]
                # Average values for radar graph
                averages = normalized_weekly_data.mean()

        
        # Ensure values don't touch the edges by capping them between 0.1 and 0.9
        normalized_weekly_data = normalized_weekly_data.clip(lower=0.1, upper=0.9)

                
        # Average values for radar graph
        averages = normalized_weekly_data.mean()

        # Create radar graph
        fig = go.Figure()
        fig.add_trace(go.Scatterpolar(
            r=averages.values,
            theta=columns,
            fill='toself',
            name=f'{file}'
        ))

        fig.update_layout(
            polar=dict(
                radialaxis=dict(
                    visible=True,
                    range=[0, 1]  # Keep the range between 0 and 1
                )
            ),
            title=f"Radar Graph for {file}'s Health Metrics"
        )

        fig.write_html(f'{file}_radar_plot.html')