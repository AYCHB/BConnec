/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.166
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.AccountIdentification = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AccountIdentification model module.
   * @module model/AccountIdentification
   * @version 0.0.166
   */

  /**
   * Constructs a new <code>AccountIdentification</code>.
   * @alias module:model/AccountIdentification
   * @class
   * @param type {module:model/AccountIdentification.TypeEnum} 
   * @param identification {String} 
   */
  var exports = function(type, identification) {
    var _this = this;

    _this['type'] = type;
    _this['identification'] = identification;
  };

  /**
   * Constructs a <code>AccountIdentification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountIdentification} obj Optional instance to populate.
   * @return {module:model/AccountIdentification} The populated <code>AccountIdentification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('identification')) {
        obj['identification'] = ApiClient.convertToType(data['identification'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountIdentification.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} identification
   */
  exports.prototype['identification'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "SORT_CODE"
     * @const
     */
    "SORT_CODE": "SORT_CODE",
    /**
     * value: "ACCOUNT_NUMBER"
     * @const
     */
    "ACCOUNT_NUMBER": "ACCOUNT_NUMBER",
    /**
     * value: "IBAN"
     * @const
     */
    "IBAN": "IBAN",
    /**
     * value: "BBAN"
     * @const
     */
    "BBAN": "BBAN",
    /**
     * value: "BIC"
     * @const
     */
    "BIC": "BIC",
    /**
     * value: "PAN"
     * @const
     */
    "PAN": "PAN",
    /**
     * value: "MASKED_PAN"
     * @const
     */
    "MASKED_PAN": "MASKED_PAN",
    /**
     * value: "MSISDN"
     * @const
     */
    "MSISDN": "MSISDN",
    /**
     * value: "BSB"
     * @const
     */
    "BSB": "BSB",
    /**
     * value: "NCC"
     * @const
     */
    "NCC": "NCC",
    /**
     * value: "ABA"
     * @const
     */
    "ABA": "ABA",
    /**
     * value: "ABA_WIRE"
     * @const
     */
    "ABA_WIRE": "ABA_WIRE",
    /**
     * value: "ABA_ACH"
     * @const
     */
    "ABA_ACH": "ABA_ACH",
    /**
     * value: "EMAIL"
     * @const
     */
    "EMAIL": "EMAIL"  };


  return exports;
}));


