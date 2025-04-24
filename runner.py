import pandas as pd
import numpy as np
import os

from ydata_profiling import ProfileReport

data=None

for file in (os.listdir(os.getcwd() +'/data')):

    print(file)
    if('.csv' in file):
        file_content=pd.read_csv(file)

        print(file_content.head())
        profile= ProfileReport(file_content, tsmode=True, sortby='', title=f'{file} EDA')
        profile.to_file(f'{file}_EDA.html')
