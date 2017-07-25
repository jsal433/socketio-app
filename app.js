var express = require('express');
var path = require('path');
var open = require('open');

var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname, "src")));

io.on('connection', function(socket){
    console.log('New connection made');
});

server.listen(port, function(){
    console.log('Listening on port: ' + port)
    open('http://localhost:' + port);
});