exports.start = function(response) {
  response.writeHead(200,
      {'Content-type': 'text/plain'});
  response.write('Hello Start!');
  response.end();
};

exports.finish = function(response) {
  response.writeHead(200,
      {'Content-type': 'text/plain'});
  response.write('Hello Finish!');
  response.end();
};
