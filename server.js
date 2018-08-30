var http = require('http');

var PORT1 = 8089;
var PORT2 = 5001;

function niceComments(request, response) {
  response.end("You're really good at Node.js!");
}

function meanComments(request, response) {
  response.end('You are a bad driver');
}

var server1 = http.createServer(niceComments);
var server2 = http.createServer(meanComments);

server1.listen(PORT1, function() {
  console.log('Server listening on: http://localhost:' + PORT1);
});

server2.listen(PORT2, function() {
  console.log('Server listening on: http://localhost:' + PORT2);
});
