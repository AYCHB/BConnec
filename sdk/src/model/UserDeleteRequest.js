/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.154
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.UserDeleteRequest = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserDeleteRequest model module.
   * @module model/UserDeleteRequest
   * @version 0.0.154
   */

  /**
   * Constructs a new <code>UserDeleteRequest</code>.
   * @alias module:model/UserDeleteRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserDeleteRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDeleteRequest} obj Optional instance to populate.
   * @return {module:model/UserDeleteRequest} The populated <code>UserDeleteRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userUuids')) {
        obj['userUuids'] = ApiClient.convertToType(data['userUuids'], ['String']);
      }
      if (data.hasOwnProperty('applicationUserIds')) {
        obj['applicationUserIds'] = ApiClient.convertToType(data['applicationUserIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} userUuids
   */
  exports.prototype['userUuids'] = undefined;
  /**
   * @member {Array.<String>} applicationUserIds
   */
  exports.prototype['applicationUserIds'] = undefined;



  return exports;
}));


