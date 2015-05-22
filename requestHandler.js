exports.start = function(response, cb) {
  response.write('Hello Start!!');
  cb();
};

exports.middle = function(response, cb) {
  response.write('Hello Middle!');
  cb();
};

exports.finish = function(response, cb) {
  response.write('Hello Finish!');
  cb();
};
