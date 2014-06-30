var http = require('http');
var server = http.createServer();

var crf = require('../mySolution-2/crf');
var loggr = require('../mySolution-1/loggr');

var onRequest = function handleRequest(req,res) {
    if(req.url == '/file'){
        crf('hello.txt','Hello Moto');
    }
    else if (req.url == '/numbers') {
        loggr(0,8);
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You requested ' + req.url);
};

server
    .listen(3000)
    .on('request', onRequest)
;

console.log('Server running on port 3000');