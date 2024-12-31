import os
import random
import time
import requests

def generateArtworks(n):
    for i in range(n):
        width = random.randint(1595, 2279)
        height = random.randint(1595, 2279)
        req = requests.get(f'https://picsum.photos/{height}/{width}/?seed=000{i}')
        if req.status_code == 200:
            img_data = req.content
            with open(f'{os.getcwd()}/public/dev/artworks/artwork{i}.jpg','wb+') as artworkImg:
                artworkImg.write(img_data)
            print(f'+Artwork{i} was downloaded!')
        else:
            print(f'-Artwork{i} download failed!')
        time.sleep(1)

generateArtworks(42)