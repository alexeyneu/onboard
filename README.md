## Install all stuff
from repo root  
for arch linux:  
```
sudo su 
source /usr/share/nvm/nvm.sh
nvm install 16
exit
source /usr/share/nvm/nvm.sh
nvm use 16
sudo npm install -g yarn
yarn install
```
## Run
from repo root
```
yarn start
```
## Production
from repo root
```
yarn build
```
then copy all stuff form `build` right to hosting root you have