var express = require('express');
var app = express();

const restRouter = require('./routes/rest');
const path = require('path');

const port = 3000;
app.set('port', (process.env.PORT || port));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1', restRouter);

// use at the end of the url paths
app.use(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
}); 

const http = require('http');

const server = http.createServer(app);
server.listen(app.get('port'));

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
