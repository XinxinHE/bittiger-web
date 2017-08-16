## Issues 1
- Solution: add --save when installing packages

ERROR in multi script-loader!./~/jquery/dist/jquery.js script-loader!./~/bootstrap/dist/js/bootstrap.js
Module not found: Error: Can't resolve '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/jquery/dist/jquery.js' in '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/@angular/cli/models/webpack-configs'
 @ multi script-loader!./~/jquery/dist/jquery.js script-loader!./~/bootstrap/dist/js/bootstrap.js

ERROR in multi script-loader!./~/jquery/dist/jquery.js script-loader!./~/bootstrap/dist/js/bootstrap.js
Module not found: Error: Can't resolve '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/bootstrap/dist/js/bootstrap.js' in '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/@angular/cli/models/webpack-configs'
 @ multi script-loader!./~/jquery/dist/jquery.js script-loader!./~/bootstrap/dist/js/bootstrap.js

ERROR in multi ./src/styles.css ./~/bootstrap/dist/css/bootstrap.min.css
Module not found: Error: Can't resolve '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/bootstrap/dist/css/bootstrap.min.css' in '/home/xinxinhe/Practices/bittiger-web/bittiger-web/node_modules/@angular/cli/models/webpack-configs'
 @ multi ./src/styles.css ./~/bootstrap/dist/css/bootstrap.min.css
webpack: Failed to compile.
^Z
[1]  + 30695 suspended  ng serve


## Sidebar npm package
https://github.com/arkon/ng-sidebar

## connect to ec2
ssh -i "bittiger.pem" ubuntu@ec2-13-58-104-36.us-east-2.compute.amazonaws.com

## copy file to ecs
scp -i ~/Practices/bittiger-web/others/bittiger.pem ~/Practices/bittiger-web/bittiger-web.tar.gz ubuntu@ec2-13-58-104-36.us-east-2.compute.amazonaws.com:~/bittiger-2

scp -i ~/Practices/bittiger-web/others/bittiger.pem ~/Practices/bittiger-web/pro-client.tar.gz ubuntu@ec2-13-58-104-36.us-east-2.compute.amazonaws.com:~/bittiger/pro-client

## If your tar file is compressed using a gzip compressor, use this command to uncompress it.

`$ tar xvzf bittiger-web.tar.gz`

x: This option tells tar to extract the files.
v: The “v” stands for “verbose.” This option will list all of the files one by one in the archive.
z: The z option is very important and tells the tar command to uncompress the file (gzip).
f: This options tells tar that you are going to give it a file name to work with.

A tarball is a group or archive of files that are bundled together using the tar command and have the .tar file extension.


## install Putty
sudo apt-get update
sudo apt-get install putty

## forever serve
sudo npm install forever
forever start index.js


REDIRECT --to-port 8080

ng g component new-cmp

http://ec2-13-58-104-36.us-east-2.compute.amazonaws.com:8080/

## install quill
npm install quill --save (? hold)

npm install ngx-quill-editor --save

## install mongoDB

https://www.howtoforge.com/tutorial/install-mongodb-on-ubuntu-16.04/


export ENV_CONFIG_FILE=config.cfg   -- no space
FLASK_APP=server.py flask run
export FLASK_DEBUG=1    -- run with debug mode


mongoimport --db bittiger --collection course_table --drop --file ./courseList.json --jsonArray
mongoimport --db bittiger --collection folder_table --drop --file ./folderList.json --jsonArray
mongoimport --db bittiger --collection question_table --drop --file ./questionList.json --jsonArray