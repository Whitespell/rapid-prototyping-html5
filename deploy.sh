#!/bin/sh
ssh public-internal.whitespell.com "cd /usr/share/whitespell.com && git pull --force origin master"
ssh public-internal.whitespell.com "cp -R /usr/share/whitespell.com/www/* /var/www/whitespell.com/htdocs"

#remove the directories
ssh public-internal.whitespell.com "sudo rm -rf /usr/share/peak-app/*";

#create the peak api directory if it doesn't already exist
ssh public-internal.whitespell.com "sudo mkdir -p /usr/share/peak-app && sudo chmod -R 777 /usr/share/peak-app";

#//todo make it zip based
#place the right content in the directories
scp -r public/* public-internal.whitespell.com:/usr/share/nginx/www/peak/public/
scp -r local/* public-internal.whitespell.com:/usr/share/nginx/www/peak/local/

#todo build artifacts and deploy on public server as well