#!/bin/sh
#scp -r public/* $USER@23.236.50.248:/usr/share/nginx/www/peak/public/
#scp -r local/* $USER@23.236.50.248:/usr/share/nginx/www/peak/local/
git add --all
git commit -m $1
git push origin master
ssh public.whitespell.com "cd /usr/share/nginx/www/peak && git pull --force origin master"
./build.sh

