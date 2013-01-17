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

    if(!config.secrets || !config.secrets.clientId || !config.secrets.clientSecret || !config.secrets.redirectUrl) {
      logger.error('Client configuration not supplied; add config.secrets information, (clientId, clientSecret, redirectUrl).');
      throw new Error('Configuration Error: Client information not supplied.');
    }

    if(!config.lelylan.oauthTokenUri || !config.lelylan.apiUri) {
      logger.error('Lelylan configuration not supplied. Add config.lelylan information, (oauthTokenUri, apiUri)');
      throw new TypeError('Configuration Error: Lelylan config information not supplied.');
    }

    return config;
  }

  config = configure(config);
  var core = require('./core')(config);

  /**
   * Exchange a user authorization code for an access token.
   * @param {Object} params A collection of parameters for the Access Token request.
   * @param {String} params.code The code provided by Lelylan as the result of the user redirect.
   * @param {String} [params.grant_type='authorization_code'] The type of authorization to request.
   * @param {Function} callback The function to call with results, function({Error} error, {Object} results).
   * @see https://dev.lelylan.com/api/oauth
   */
  function getAccessToken(params, callback) {
    //params = params || {};
    //params.grant_type = params.grant_type || 'authorization_code';
    //params.client_id = config.secrets.clientId;
    //params.client_secret = config.secrets.clientSecret;
    //params.redirect_uri = config.secrets.redirectUrl;

    //core.retrieve(config.lelylan.accessTokenUrl + '?' + qs.stringify(params),
      //function(error, status, result) {
        //if(error) {
          //callback(error);
        //}
        //else {
          //try {
            //var resultObj = JSON.parse(result);
            //if(resultObj.error) {
              //callback({message: esultObj.error});
            //}
            //else if(!resultObj.access_token) {
              //callback({message: 'access_token not present, got ' + result});
            //}
            //else {
              //callback(null, resultObj.access_token);
            //}
          //}
          //catch(e) {
            //callback(e);
          //}
        //}
      //});
    callback();
  }

  /**
   * Build and return an appropriate Authorization URL where the user can grant permission to the application.
   */
  function getAuthClientRedirectUrl() {
    return config.lelylan.authenticateUrl + '?client_id=' +
      config.secrets.clientId + '&response_type=code&redirect_uri=' +
      config.secrets.redirectUrl;
  }

  return {
    'Devices' : require('./devices')(config),
    'getAccessToken' : getAccessToken,
    'getAuthClientRedirectUrl' : getAuthClientRedirectUrl
  }
};
