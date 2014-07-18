/**
 * Created by falbertin on 7/17/14.
 */

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res){
   switch(req.method){
       case 'POST':
           var item = '';
           req.setEncoding('utf-8');
           req.on('data', function(chunk){
               item += chunk;
           });
           req.on('end', function(){
              items.push(item);
              res.end('OK\n');
           });
           break;
       case 'GET':
           var body = items.map(function(item, i){
               return i + ') ' + item;
           }).join('\n');
           res.setHeader('Content-Length', Buffer.byteLength(body));
           res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
           res.end(body);
           break;
       case 'DELETE':
           var path = url.parse(req.url).pathname;
           var i = parseInt(path.slice(1), 10);
           if (isNaN(i)){
               res.statusCode = 400;
               res.end('Invalid item ID');
           }
           else if (!items[i]){
               res.statuscode = 404;
               res.end('Item not found');
           }
           else {
               items.splice(i, 1);
               res.end('OK\n');
           }
           break;
       case 'PUT':
           var path = url.parse(req.url).pathname;
           var i = parseInt(path.slice(1), 10);
           if (isNaN(i)){
               res.statusCode = 400;
               res.end('Invalid item ID');
           }
           else if (!items[i]){
               res.statuscode = 404;
               res.end('Item not found');
           }
           else {
               var useQuery = url.parse(req.url).query;
               var newVal = useQuery.slice(useQuery.indexOf('=') + 1); // expects ?newVal=x
               items[i] = newVal;
               res.end('OK\n');
           }
           break;
   }
}).listen(3000);