
var request = require('request');
// var jquery = require('jQuery');

// var app = require('./server/server.js');

var app = require('./server/server.js');



var port = process.env.PORT || 3000;
// console.log(jquery);
// jquery('.year').html("<div>Heeeeeey!!!!</div>");


app.listen(port);






var options = {
      url: 'https://numbersapi.p.mashape.com/1492/year?fragment=true&json=true',
      headers: {
       "X-Mashape-Key": 'fO6LEPSj1Ymsha2VU0tZiKZoubJmp1SKQP1jsnSrLLFLQBFA6n',
      Accept: 'application/json'       
      }

    }





  request.get(options, function(error, response, body){
    body = JSON.parse(body);
    console.log(body);
    console.log(body.number);
    console.log(typeof body.number);
    // module.exports = body;
    // res.send(body);
    // res.send('<p>' + body.text + '</p>');

    // $('.year').html("<div>Heeeeeey!!!!</div>");
  })
