function route(handle, pathname, response) {
  console.log('Router at ' + pathname);

  if (typeof handle[pathname] === 'function') {
    response.writeHead(200, {'Content-type': 'text/plain'});
    handle[pathname](response, function(){
      response.end();
    });
  } else {
    console.log('No handler found to ' + pathname);
    response.writeHead(404,
        {'Content-type': 'text/plain'});
    response.write('404 not found!');
    response.end();
  }
}

exports.route = route;
