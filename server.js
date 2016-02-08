var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var port = process.env.PORT || 3000;



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', function(req, res){
  res.send('hello world');
});

console.log('Server now listening on port: ' + port);

app.listen(port);
