var http = require('http'),
    path = require('path'),
    fs = require('fs');
var server = http.createServer();

// var crf = require('../mySolution-2/crf');

var onRequest = function handleRequest(req,res) {

    var reqUrl = req.url;
    var fileToLoad = reqUrl.slice(reqUrl.indexOf('/') + 1, reqUrl.length) + '.html';

    path.exists(fileToLoad, function(exists) {
        if (!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        fs.readFile(fileToLoad, "binary", function(err, file) {
            if(err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }
            res.writeHead(200);
            res.write(file, "binary");
            res.end();
    });


    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('You requested ' + req.url + ' so I should give you ' + fileToLoad);
};

server
    .listen(3000)
    .on('request', onRequest)
;

console.log('Server running on port 3000');