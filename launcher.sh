fuser -k 3000/tcp
fuser -k 5000/tcp

cd  ./pro-server
nodemon server.js &

cd ../pro-client
ng build --watch &

cd ../backend_db

export ENV_CONFIG_FILE=config.cfg
export FLASK_DEBUG=1
export FLASK_APP=server.py
flask run &

# sh launcher.sh

