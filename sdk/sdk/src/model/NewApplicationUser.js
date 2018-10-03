/**
 * Yapily API
 * To access endpoints that require authentication, use your Application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.35
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
    root.YapilyApi.NewApplicationUser = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewApplicationUser model module.
   * @module model/NewApplicationUser
   * @version 0.0.35
   */

  /**
   * Constructs a new <code>NewApplicationUser</code>.
   * @alias module:model/NewApplicationUser
   * @class
   * @param referenceId {String} 
   */
  var exports = function(referenceId) {
    var _this = this;

    _this['referenceId'] = referenceId;
  };

  /**
   * Constructs a <code>NewApplicationUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewApplicationUser} obj Optional instance to populate.
   * @return {module:model/NewApplicationUser} The populated <code>NewApplicationUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} referenceId
   */
  exports.prototype['referenceId'] = undefined;



  return exports;
}));


