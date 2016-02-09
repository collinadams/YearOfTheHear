var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var require = require('underscore-node');
// var jquery = require('jQuery');

var app = express();

var port = process.env.PORT || 3000;
// console.log(jquery);
// jquery('.year').html("<div>Heeeeeey!!!!</div>");


app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extend: true }));

app.get('/', function(req, res){
  res.send('hello world');
});

var options = {
  url: 'https://numbersapi.p.mashape.com/1787/year?json=true',
  headers: {
    'X-Mashape-Key': 'fO6LEPSj1Ymsha2VU0tZiKZoubJmp1SKQP1jsnSrLLFLQBFA6n',
    'Accept': 'application/json'
  }
};

app.get('/number', function(req, res){
  request(options, function(error, response, body){
    body = JSON.parse(body);
    console.log(body.number);
    console.log(typeof body.number);
    module.exports = body;
    // res.send(body);
    res.send('<p>' + body.text + '</p>');

    // $('.year').html("<div>Heeeeeey!!!!</div>");
  })
});

console.log('Server now listening on port: ' + port);

app.listen(port);

