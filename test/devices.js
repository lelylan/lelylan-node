var config  = {
  'secrets' : { 'clientId' : '-', 'clientSecret' : '-', 'redirectUrl' : '-' },
  'lelylan' : {
    'oauthAuthorizationUri' : 'http://localhost:3000/oauth/authorization',
    'oauthTokenUri' : 'http://localhost:3000/oauth/token',
    'apiUri' : 'http://localhost:8000'
  },
}
var Lelylan = require('./../lib/lelylan-node.js')(config);
var response;

describe('GET all devices',function() {

  before(function(done) {
    Lelylan.Devices.all('0000', function(err, r){
      if (err) console.log(err)
      response = r;
      done();
    })
  })

  it('return a json array',function() {
    console.log('LELY: response', response);
  });
});

