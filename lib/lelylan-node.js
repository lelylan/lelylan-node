/**
 * A NodeJS module for interfacing with Lelylan.
 * @module lelylan-node
 * @version 0.1
 * @author Andrea Reginato
 * @description A NodeJS module for interacting with Lelylan.
 * @param {Object} config A valid configuration.
 */

var qs            = require('querystring'),
    util          = require('util'),
    defaultConfig = require('./config-default'),
    winston       = require('winston');


// Shallow copy
function mergeDefaults(o1, o2) {
  for (var p in o2) {
    try { if (typeof o2[p] == 'object') { o1[p] = mergeDefaults(o1[p], o2[p]); } else if (typeof o1[p] == 'undefined') { o1[p] = o2[p]; } }
    catch(e) { o1[p] = o2[p]; }
  }
  return o1;
}


module.exports = function(config) {

  // Base lelylan configuration
  function configure(config) {
    config = config || {};
    mergeDefaults(config, defaultConfig);

    winston.addColors(config.winston.colors);
    var logger = new (winston.Logger)();
    logger.setLevels(config.winston.levels);

    return config;
  }

  config = configure(config);
  var core = require('./core')(config);

  return {
    'Devices' : require('./devices')(config)
  }
};
