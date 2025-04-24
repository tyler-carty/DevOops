import pandas as pd
import numpy as np
import os

import plotly.express as px
import plotly.graph_objects as go


from ydata_profiling import ProfileReport

data=None

for file in (os.listdir(os.getcwd() +'/data')):

    print(file)
    if('.csv' in file and 1 == 0):
        file_content=pd.read_csv(os.getcwd()+ '/data/'+file)
        file_content['Datetime']= pd.to_datetime(file_content['Date']+'T'+file_content['Time']+'Z')
        file_content.set_index('Datetime', inplace=True)
        file_content.drop(['Date', 'Time'], axis=1, inplace=True)
        print(file_content.head())
        # profile= ProfileReport(file_content, tsmode=True, sortby='', title=f'{file} EDA')
        # profile.to_file(f'{file}_EDA.html')
        fig=px.line_polar(file_content, r=file_content.columns[0], theta=file_content.index, line_close=True)
        fig.write_html(f'{file}_polar_plot.html')  # Corrected method to save the figure

    if('.csv' in file and 1 == 1):
        data=pd.read_csv(os.getcwd()+ '/data/'+file)
        print(data.head())
        # Select relevant columns
        columns = ['Step Count (steps)', 'Exercise Minutes (minutes)', 'Mindfulness Minutes (minutes)', 'Deep Sleep (%)', 'REM Sleep (%)', 'Heart Rate (bpm)']
        data = data[columns]

        # Normalize the data
        normalized_data = (data - data.min()) / (data.max() - data.min())

        # Average values for radar graph
        averages = normalized_data.mean()

        # Create radar graph
        fig = go.Figure()
        fig.add_trace(go.Scatterpolar(
            r=averages.values,
            theta=columns,
            fill='toself',
            name=f'{file}'
        ))

        fig.update_layout(
            polar=dict(radialaxis=dict(visible=True, range=[0, 1])),
            title=f"Radar Graph for {file}'s Health Metrics"
        )

        fig.write_html(f'{file}_radar_plot.html')

