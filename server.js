var http = require('http');
var url = require('url');

var port = 3000;

var ip = '127.0.0.1';

var server = http.createServer( function(req, res){
  console.log('hello world');
});