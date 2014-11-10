#!/bin/bash

grunt build

tar -cvf dist.tar dist/

scp ./dist.tar root@112.124.43.62:/tmp/