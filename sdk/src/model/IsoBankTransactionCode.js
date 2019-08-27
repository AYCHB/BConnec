/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.136
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
    define(['ApiClient', 'model/IsoCodeDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IsoCodeDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.IsoBankTransactionCode = factory(root.YapilyApi.ApiClient, root.YapilyApi.IsoCodeDetails);
  }
}(this, function(ApiClient, IsoCodeDetails) {
  'use strict';




  /**
   * The IsoBankTransactionCode model module.
   * @module model/IsoBankTransactionCode
   * @version 0.0.136
   */

  /**
   * Constructs a new <code>IsoBankTransactionCode</code>.
   * @alias module:model/IsoBankTransactionCode
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>IsoBankTransactionCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IsoBankTransactionCode} obj Optional instance to populate.
   * @return {module:model/IsoBankTransactionCode} The populated <code>IsoBankTransactionCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('domainCode')) {
        obj['domainCode'] = IsoCodeDetails.constructFromObject(data['domainCode']);
      }
      if (data.hasOwnProperty('familyCode')) {
        obj['familyCode'] = IsoCodeDetails.constructFromObject(data['familyCode']);
      }
      if (data.hasOwnProperty('subFamilyCode')) {
        obj['subFamilyCode'] = IsoCodeDetails.constructFromObject(data['subFamilyCode']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/IsoCodeDetails} domainCode
   */
  exports.prototype['domainCode'] = undefined;
  /**
   * @member {module:model/IsoCodeDetails} familyCode
   */
  exports.prototype['familyCode'] = undefined;
  /**
   * @member {module:model/IsoCodeDetails} subFamilyCode
   */
  exports.prototype['subFamilyCode'] = undefined;



  return exports;
}));


