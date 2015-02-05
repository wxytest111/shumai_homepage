#!/bin/bash

grunt build --force

tar -cvf dist.tar dist/

scp ./dist.tar root@115.29.168.206:/tmp/

ssh root@115.29.168.206 /bin/bash << EOF
rm -fr /opt/works/shumai_homepage/
mkdir -p /opt/works/shumai_homepage/
tar xvf /tmp/dist.tar -C /opt/works/shumai_homepage/
EOF
