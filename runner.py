import pandas as pd
import numpy as np
import os

from ydata_profiling import ProfileReport

data=None

for file in (os.listdir(os.getcwd() +'/data')):

    print(file)
    if('.csv' in file):
        file_content=pd.read_csv(os.getcwd()+ '/data/'+file)
        file_content['Datetime']= pd.to_datetime(file_content['Date']+'T'+file_content['Time']+'Z')
        file_content.set_index('Datetime', inplace=True)
        file_content.drop(['Date', 'Time'], axis=1, inplace=True)
        print(file_content.head())
        profile= ProfileReport(file_content, tsmode=True, sortby='', title=f'{file} EDA')
        profile.to_file(f'{file}_EDA.html')
