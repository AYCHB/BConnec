/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.53
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApplicationUser', 'model/NewApplicationUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApplicationUser'), require('../model/NewApplicationUser'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.ApplicationUsersApi = factory(root.YapilyApi.ApiClient, root.YapilyApi.ApplicationUser, root.YapilyApi.NewApplicationUser);
  }
}(this, function(ApiClient, ApplicationUser, NewApplicationUser) {
  'use strict';

  /**
   * ApplicationUsers service.
   * @module api/ApplicationUsersApi
   * @version 0.0.53
   */

  /**
   * Constructs a new ApplicationUsersApi. 
   * @alias module:api/ApplicationUsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addUserUsingPOST operation.
     * @callback module:api/ApplicationUsersApi~addUserUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add an application user
     * @param {module:model/NewApplicationUser} newApplicationUser newApplicationUser
     * @param {module:api/ApplicationUsersApi~addUserUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationUser}
     */
    this.addUserUsingPOST = function(newApplicationUser, callback) {
      var postBody = newApplicationUser;

      // verify the required parameter 'newApplicationUser' is set
      if (newApplicationUser === undefined || newApplicationUser === null) {
        throw new Error("Missing the required parameter 'newApplicationUser' when calling addUserUsingPOST");
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
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json;charset=UTF-8'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApplicationUser;

      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserUsingDELETE operation.
     * @callback module:api/ApplicationUsersApi~deleteUserUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an application user
     * @param {String} userUuid userUuid
     * @param {module:api/ApplicationUsersApi~deleteUserUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deleteUserUsingDELETE = function(userUuid, callback) {
      var postBody = null;

      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling deleteUserUsingDELETE");
      }


      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/users/{userUuid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getUserUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApplicationUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get an application user
     * @param {String} userUuid userUuid
     * @param {module:api/ApplicationUsersApi~getUserUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApplicationUser}
     */
    this.getUserUsingGET = function(userUuid, callback) {
      var postBody = null;

      // verify the required parameter 'userUuid' is set
      if (userUuid === undefined || userUuid === null) {
        throw new Error("Missing the required parameter 'userUuid' when calling getUserUsingGET");
      }


      var pathParams = {
        'userUuid': userUuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = ApplicationUser;

      return this.apiClient.callApi(
        '/users/{userUuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsersUsingGET operation.
     * @callback module:api/ApplicationUsersApi~getUsersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ApplicationUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get application users
     * @param {module:api/ApplicationUsersApi~getUsersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ApplicationUser>}
     */
    this.getUsersUsingGET = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json;charset=UTF-8'];
      var returnType = [ApplicationUser];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
