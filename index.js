/*
 * Primary file for API
 *
 */

// Dependencies
var http = require('http');
var url = require('url');

 // Configure the server to respond to all requests with a string
var server = http.createServer(function(req,res){

  // Parse the url
  var parsedUrl = url.parse(req.url, true);

  // Get the path
  var path = parsedUrl.pathname;
  var trimmedPath = path.replace(/^\/+|\/+$/g, '');

  // Get the query string as an object
  var queryStringObject = parsedUrl.query;

  // Get the HTTP method
  var method = req.method.toLowerCase();

  // Send the response
  res.end('Hello World!\n');

  // Log the request/response
  console.log('Request received on path: '+trimmedPath+' with method: '+method+' and this query string: ',queryStringObject);
  console.log('\n entire url is : '+JSON.stringify(parsedUrl));
  console.log('\n entire url is : '+JSON.stringify(parsedUrl.path));
  console.log('\n entire url is : '+JSON.stringify(parsedUrl.pathname));
  console.log('\n entire url is : '+Object.keys(req));
  console.log('\n entire url is : '+req.httpVersion);
});

// Start the server
server.listen(process.env.PORT,function(){
  console.log('The server is up and running now');
});
