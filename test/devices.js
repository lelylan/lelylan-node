var Lelylan = require('./../lib/lelylan-node.js')({ 'token': '5f7fb8f11b8499b' });
var nock    = require('nock');

var request, response, error;

describe('GET all devices',function() {

  before(function(done) {
    request = nock('http://api.lelylan.com').get('/devices').replyWithFile(200, __dirname + '/fixtures/devices.json');
    done();
  })

  before(function(done) {
    Lelylan.Devices.all(function(e, r) {
      error = e; response = r; done();
    })
  })

  it('return a json array',function() {
    if (error) console.log('Error - Lelylan Node Test: ',  error);
    console.log('Lelylan Node Test:', response);
    console.log(request.isDone());
  });
});

