var should = require('should');
var requestHandler = require('../requestHandler');

var response = {
  message: "",
  write: function(string) {
    this.message = string;
  }
};

describe('Testing requestHandler', function(){
  describe('/start', function() {
    it('should return hello string', function(){
      requestHandler.start(response, function() {
        response.message.should.equal('Hello Start!!');
      });
    });
  });

  describe('/finish', function() {
    it('should return hello string', function(){
      requestHandler.finish(response, function() {
        response.message.should.equal('Hello Finish!');
      });
    });
  });
});
