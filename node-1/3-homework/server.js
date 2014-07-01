/* Variation on static page Node server */

// Load Node libs
var http = require('http'),
    url = require("url"),
    path = require('path'),
    fs = require('fs');

// Create the server
var server = http.createServer();

// Support function for sending the proper MIME type
function detMIME(input) {
    if (input === '.html' || input === '/' || input === ''){
        return {"Content-Type": "text/html"};
    }
    else if (input === '.css'){
        return {"Content-Type": "text/css"};
    }
    else if (input === '.js'){
        return {"Content-Type": "application/x-javascript"};
    }
}

// With a little help from https://gist.github.com/rpflorence/701407

var onRequest = function handleRequest(req,res) {

    var uri = url.parse(req.url).pathname;

    // if there's no file extension and we're not at the root level
    if(path.extname(uri) === '' && uri !== '/'){
        var fileToLoad = path.join(process.cwd(), uri) + '.html';
    }
    else {
        var fileToLoad = path.join(process.cwd(), uri);
    }

    path.exists(fileToLoad, function(exists) {
        // if the file isn't there, return a 404
        if (!exists) {
            res.writeHead(404, {"Content-Type": "text/plain"});
            res.write("404 Not Found\n");
            res.end();
            return;
        }

        // if the browser wants a directory, he should want index.html
        if (fs.statSync(fileToLoad).isDirectory()) {
            fileToLoad += '/index.html';
        }

        // try reading the file and throw a 500 if unsuccessful
        fs.readFile(fileToLoad, "binary", function(err, file) {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.write(err + "\n");
                res.end();
                return;
            }

            // Write the response using the correct MIME type
            res.writeHead(200, detMIME(path.extname(uri)));
            res.write(file, "binary");
            res.end();
        });
    });

};

server
    .listen(3000)
    .on('request', onRequest)
;

console.log('Server running on port 3000');