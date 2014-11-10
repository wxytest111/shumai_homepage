#!/bin/bash

npm install bower

npm install grunt-cli

bower install

npm install

grunt build

tar -cvf dist.tar dist/

scp ./dist.tar root@112.124.43.62:/tmp/