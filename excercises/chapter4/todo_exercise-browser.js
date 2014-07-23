/**
 * Created by falbertin on 7/23/14.
 */

var http = require('http');
// var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
    if ('/' == req.url){
        switch(req.method){
            case 'POST':
                add(req, res);
                break;
            case 'GET':
                show(res);
                break;
            default:
                badRequest(res);
        }
    }
    else {
        notFound(res);
    }
}).listen(3000);