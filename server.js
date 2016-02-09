var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

var port = process.env.PORT || 3000;



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', function(req, res){
  res.send('hello world');
});

var options = {
  url: 'https://numbersapi.p.mashape.com/1492/year',
  headers: {
    'X-Mashape-Key': 'fO6LEPSj1Ymsha2VU0tZiKZoubJmp1SKQP1jsnSrLLFLQBFA6n',
    'Accept': 'text/plain'
  }
};

app.get('/number', function(req, res){
  request(options, function(error, response, body){
    console.log('body');
    res.send('body');
  })
});

console.log('Server now listening on port: ' + port);

app.listen(port);
