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
   }
});