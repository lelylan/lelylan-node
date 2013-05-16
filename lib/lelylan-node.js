var appConfig = require('./config');

module.exports = function(config) {

  function configure(config) {
    config = config || {};
    mergeDefaults(config, appConfig);
    return config;
  }

  config = configure(config);
  var core = require('./core')(config);

  function mergeDefaults(o1, o2) {
    for (var p in o2) {
      try { if (typeof o2[p] == 'object') { o1[p] = mergeDefaults(o1[p], o2[p]); } else if (typeof o1[p] == 'undefined') { o1[p] = o2[p]; } }
      catch(e) { o1[p] = o2[p]; }
    }
    return o1;
  }

  return {
    'Device'       : require('./client/device')(config),
    'History'      : require('./client/history')(config),
    'Type'         : require('./client/type')(config),
    'Property'     : require('./client/property')(config),
    'Function'     : require('./client/function')(config),
    'Status'       : require('./client/status')(config),
    'Category'     : require('./client/category')(config),
    'Location'     : require('./client/location')(config),
    'Physical'     : require('./client/physical')(config),
    'Subscription' : require('./client/subscription')(config),
    'Profile'      : require('./client/profile')(config),
    'config'       : config
  }
};
