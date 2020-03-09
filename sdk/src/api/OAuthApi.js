/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.173
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/YapilyAccessToken'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/YapilyAccessToken'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.OAuthApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.YapilyAccessToken);
  }
}(this, function(ApiClient, YapilyAccessToken) {
  'use strict';

  /**
   * OAuth service.
   * @module api/OAuthApi
   * @version 0.0.168
   */

  /**
   * Constructs a new OAuthApi. 
   * @alias module:api/OAuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the oauthToken operation.
     * @callback module:api/OAuthApi~oauthTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/YapilyAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Access Token
     * @param {module:model/String} grantType Grant type
     * @param {module:api/OAuthApi~oauthTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/YapilyAccessToken}
     */
    this.oauthToken = function(grantType, callback) {
      var postBody = null;
      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling oauthToken");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'grant_type': grantType
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = YapilyAccessToken;
      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
