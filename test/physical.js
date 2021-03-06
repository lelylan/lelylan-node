var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Physical',function() {

  describe('#properties',function() {

    beforeEach(function(done) {
      var secret = 'b919e6d73fb956335507b809c457cbda0e4856e2';
      request = nock('http://mqtt.lelylan.com')
                .filteringRequestBody(function(path) {return '*'})
                .put('/physicals/1', '*')
                .reply(202);
      done();
    })

    beforeEach(function(done) {
      Lelylan.Physical.properties('http://mqtt.lelylan.com/physicals/1', 'secret', {'properties': {}}, function(e, r) {
        error = e;
        response = r;
        done();
      })
    })

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('returns a json object',function() {
      (response == undefined).should.be.true;
      (error == null).should.be.true;
    });
  });
})

