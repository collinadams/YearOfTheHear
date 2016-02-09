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

app.get('/number', function(req, res){
  request('https://numbersapi.p.mashape.com/{year}/year', function(error, response, data){
    if(error){
      console.log('error fetching numbersapi');
      return;
    }else if(!error && response.statusCode === 200){
      res.send('data');
    }
  })
})

console.log('Server now listening on port: ' + port);

app.listen(port);
