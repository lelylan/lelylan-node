var token   = require('./support/token')();
var Lelylan = require('./../lib/lelylan-node.js')({ 'token': token});
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Profile',function() {

  describe('#me',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/me').replyWithFile(200, __dirname + '/fixtures/profile.json');
      done();
    });

    beforeEach(function(done) {
      Lelylan.Profile.me(function(e, r) {
        error = e; response = r; done();
      });
    });

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('returns a json object',function() {
      response.should.have.property('email');
    });
  });
});

