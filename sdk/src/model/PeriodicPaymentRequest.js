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
    define(['ApiClient', 'model/Amount', 'model/FrequencyRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./FrequencyRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PeriodicPaymentRequest = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount, root.YapilyApi.FrequencyRequest);
  }
}(this, function(ApiClient, Amount, FrequencyRequest) {
  'use strict';



  /**
   * The PeriodicPaymentRequest model module.
   * @module model/PeriodicPaymentRequest
   * @version 0.0.168
   */

  /**
   * Constructs a new <code>PeriodicPaymentRequest</code>.
   * @alias module:model/PeriodicPaymentRequest
   * @class
   * @param frequency {module:model/FrequencyRequest} 
   */
  var exports = function(frequency) {
    var _this = this;

    _this['frequency'] = frequency;
  };

  /**
   * Constructs a <code>PeriodicPaymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeriodicPaymentRequest} obj Optional instance to populate.
   * @return {module:model/PeriodicPaymentRequest} The populated <code>PeriodicPaymentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('frequency')) {
        obj['frequency'] = FrequencyRequest.constructFromObject(data['frequency']);
      }
      if (data.hasOwnProperty('numberOfPayments')) {
        obj['numberOfPayments'] = ApiClient.convertToType(data['numberOfPayments'], 'Number');
      }
      if (data.hasOwnProperty('nextPaymentDateTime')) {
        obj['nextPaymentDateTime'] = ApiClient.convertToType(data['nextPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('nextPaymentAmount')) {
        obj['nextPaymentAmount'] = Amount.constructFromObject(data['nextPaymentAmount']);
      }
      if (data.hasOwnProperty('finalPaymentDateTime')) {
        obj['finalPaymentDateTime'] = ApiClient.convertToType(data['finalPaymentDateTime'], 'Date');
      }
      if (data.hasOwnProperty('finalPaymentAmount')) {
        obj['finalPaymentAmount'] = Amount.constructFromObject(data['finalPaymentAmount']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/FrequencyRequest} frequency
   */
  exports.prototype['frequency'] = undefined;
  /**
   * @member {Number} numberOfPayments
   */
  exports.prototype['numberOfPayments'] = undefined;
  /**
   * @member {Date} nextPaymentDateTime
   */
  exports.prototype['nextPaymentDateTime'] = undefined;
  /**
   * @member {module:model/Amount} nextPaymentAmount
   */
  exports.prototype['nextPaymentAmount'] = undefined;
  /**
   * @member {Date} finalPaymentDateTime
   */
  exports.prototype['finalPaymentDateTime'] = undefined;
  /**
   * @member {module:model/Amount} finalPaymentAmount
   */
  exports.prototype['finalPaymentAmount'] = undefined;



  return exports;
}));


