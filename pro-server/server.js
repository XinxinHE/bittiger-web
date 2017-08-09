var express = require('express');
var app = express();

const path = require('path');

const port = 8080;
app.set('port', port);

app.use(express.static(path.join(__dirname, '../pro-client/dist/')));

app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../pro-client/dist/')});
});



const http = require('http');

const server = http.createServer(app);
server.listen(port);

server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  throw error;
}

function onListening() {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + address.port;
  console.log('Listening on ' + bind);
}