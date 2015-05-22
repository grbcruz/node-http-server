exports.start = function(response, cb) {
  response.write('Hello Start!');
  cb();
};

exports.finish = function(response, cb) {
  response.write('Hello Finish!');
  cb();
};
