import pandas as pd
import numpy as np
import os

for file in (os.listdir(os.getcwd() +'/data')):
    print(file)
    if('.csv' in file):
        file_content=open('./data/'+file, 'r+')

        print(file_content.read())

