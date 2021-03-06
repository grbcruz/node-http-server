var http = require('http');
var url = require('url');

function start(route, handle) {
  function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request received at ' + pathname);

    route(handle, pathname, response);
  }

  http.createServer(onRequest).listen(process.env.PORT || 5000);

  console.log('Server has started');
}

exports.start = start;
