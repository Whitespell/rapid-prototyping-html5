#!/bin/sh

# HOST KEY VERIFICATION PROMPT WILL MAKE THIS FAIL THE FIRST TIME YOU RUN IT.


#create the peak directories if it doesn't already exist and chmod them
ssh public-internal.whitespell.com "sudo mkdir -p /usr/share/nginx/www/peak && sudo chmod -R 777 /usr/share/nginx/www/peak";
ssh public-internal.whitespell.com "sudo mkdir -p /usr/share/nginx/www/peak/local/ && sudo chmod -R 777 /usr/share/nginx/www/peak/local/";
ssh public-internal.whitespell.com "sudo mkdir -p /usr/share/nginx/www/peak/public/ && sudo chmod -R 777 /usr/share/nginx/www/peak/public/";


#//todo make it zip based
#place the right content in the directories
scp -r public/* public-internal.whitespell.com:/usr/share/nginx/www/peak/public/
scp -r local/* public-internal.whitespell.com:/usr/share/nginx/www/peak/local/

#todo build artifacts and deploy on public server as well