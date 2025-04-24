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
                   'Deep Sleep (%)', 'REM Sleep (%)', 'Respiratory Rate (breaths/min)', 'Heart Rate (bpm)']
        data = data[columns]

        # Group data by week and calculate weekly aggregates
        weekly_data = data.groupby(pd.Grouper(freq='W')).agg({
            'Step Count (steps)': 'sum',  # Sum for step count
            'Exercise Minutes (minutes)': 'sum',  # Sum for exercise minutes
            'Mindfulness Minutes (minutes)': 'sum',  # Sum for mindfulness minutes
            'Deep Sleep (%)': 'max',  # Mean for percentage-based metrics
            'REM Sleep (%)': 'max',  # Mean for percentage-based metrics
            'Respiratory Rate (breaths/min)': 'mean',  # Mean for respiratory rate
            'Heart Rate (bpm)': 'mean'  # Mean for heart rate
        })

        # Normalize the weekly data based on healthy reference values

        healthy_reference = {
            'Step Count (steps)': 70000,  # Average weekly steps
            'Exercise Minutes (minutes)': 210,  # Recommended weekly exercise
            'Mindfulness Minutes (minutes)': 77,  # Suggested mindfulness duration
            'Deep Sleep (%)': 20,  # Percentage of total sleep
            'REM Sleep (%)': 25,  # Percentage of total sleep
            'Respiratory Rate (breaths/min)': 20,  # Average resting heart rate,
            'Heart Rate (bpm)': 70
        }
        normalized_weekly_data = weekly_data.copy()
        for column in columns:
            if column == 'Respiratory Rate (breaths/min)':
                # Normalize respiratory rate: closer to 20 is 1, higher or lower values are closer to 0
                normalized_weekly_data[column] = np.where(
                    (normalized_weekly_data[column] >= 8) & (normalized_weekly_data[column] <= 22), 1,
                    np.where(
                        (normalized_weekly_data[column] > 22) & (normalized_weekly_data[column] <= 26), 0.7, 0.2
                    )
                )
            elif column == 'Heart Rate (bpm)':
                print(normalized_weekly_data[column])
                # Normalize heart rate: closer to 70 is 1, higher values are closer to 0
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
                # Normalize other columns: values closer to the target are 1
                normalized_weekly_data[column] = weekly_data[column] / healthy_reference[column]

        # Ensure values don't touch the edges by capping them between 0.1 and 0.9
        normalized_weekly_data = normalized_weekly_data.clip(lower=0.1, upper=0.9)

        # Rename columns to reflect positive personality traits
        columns_mapping = {
            'Step Count (steps)': 'Active Lifestyle',
            'Exercise Minutes (minutes)': 'Fitness Enthusiasm',
            'Mindfulness Minutes (minutes)': 'Mindful Presence',
            'Deep Sleep (%)': 'Restful Sleeper',
            'REM Sleep (%)': 'Creative Dreamer',
            'Respiratory Rate (breaths/min)': 'Calm Breather',
            'Heart Rate (bpm)': 'Healthy Heart'
        }

        # Apply the renaming
        normalized_weekly_data.rename(columns=columns_mapping, inplace=True)
        columns = list(columns_mapping.values())  # Update the columns list to reflect new names

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
                    range=[0, 1.2]  # Keep the range between 0 and 1
                )
            ),
            title=f"Radar Graph for {file}'s Positive Traits"
        )

        fig.write_html(f'{file}_radar_plot.html')