var requestHandler = function(request, response){
  console.log('serving' + request.method + 'that was sent to ' + request.url);

  var statusCode = 200;

  var headers = {
    "access-control-allow-origin": "*", 
    "access-control-allow-methods": "GET", "POST", "OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10,
    "Content-Type": "text/plain"
  };

  response.writeHead(statusCode, headers);

  response.end('Hello world');


}