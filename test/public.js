var Lelylan = require('./../lib/lelylan-node.js')();
var nock    = require('nock');

var request, response, error;

describe('Lelylan.Type with no Access Token',function() {

  describe('#find',function() {

    beforeEach(function(done) {
      request = nock('http://api.lelylan.com').get('/types/1').replyWithFile(200, __dirname + '/fixtures/type.json');
      done();
    })

    beforeEach(function(done) {
      Lelylan.Type.find('1', function(e, r) {
        error = e; response = r; done();
      })
    })

    it('makes the HTTP request', function() {
      request.isDone();
    });

    it('returns a json object',function() {
      response.should.have.property('id');
    });
  });
});
