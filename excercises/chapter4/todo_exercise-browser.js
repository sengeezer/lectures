/**
 * Created by falbertin on 7/23/14.
 */

var http = require('http');
// var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
    function show(res){
        var html = '<html><head><title>To do list</title>title></head>head><body>' +
            '<h1>To do list</h1>' +
            '<ul>' +
            items.map(function(item){
                return '<li>' + item + '</li>'
            }).join('') +
            '</ul>' +
            '<form method="post" action="/">' +
            '<p><input type="text" name="item" /></p>' +
            '<p><input type="submit" value="Add item" /></p>' +
            '</form></body></html>';
        res.setHeader('Content-Type', 'text/html');
        res.setHeader('Content-Length', Buffer.byteLength(html));
        res.end(html);
    }
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