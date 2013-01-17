var winston = require('winston');

module.exports = {
  'lelylan' : {
    'oauthAuthorizationUri' : 'http://people.lelylan.com/oauth/authorization',
    'oauthTokenUri' : 'http://people.lelylan.com/oauth/token',
    'apiUri' : 'http://api.lelylan.com'
  },
  'winston' : {
    'transports' : [ new (winston.transports.Console)({'level' : 'enter', 'colorize' : true }) ],
    'levels': { 'detail': 0, 'trace': 1, 'debug': 2, 'enter': 3, 'info': 4, 'warn': 5, 'error': 6 },
    'colors': { 'detail': 'grey', 'trace': 'white', 'debug': 'blue', 'enter': 'inverse', 'info': 'green', 'warn': 'yellow', 'error': 'red' },
    'loggers': { 'default': { 'console': { 'level': 'none' } } }
  },
  'secrets' : { },
};
