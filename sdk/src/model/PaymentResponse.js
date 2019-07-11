/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.125
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
    define(['ApiClient', 'model/Amount', 'model/ChargeDetails', 'model/Payee', 'model/PaymentStatusDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'), require('./ChargeDetails'), require('./Payee'), require('./PaymentStatusDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.PaymentResponse = factory(root.YapilyApi.ApiClient, root.YapilyApi.Amount, root.YapilyApi.ChargeDetails, root.YapilyApi.Payee, root.YapilyApi.PaymentStatusDetails);
  }
}(this, function(ApiClient, Amount, ChargeDetails, Payee, PaymentStatusDetails) {
  'use strict';




  /**
   * The PaymentResponse model module.
   * @module model/PaymentResponse
   * @version 0.0.125
   */

  /**
   * Constructs a new <code>PaymentResponse</code>.
   * @alias module:model/PaymentResponse
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>PaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentResponse} obj Optional instance to populate.
   * @return {module:model/PaymentResponse} The populated <code>PaymentResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('institutionConsentId')) {
        obj['institutionConsentId'] = ApiClient.convertToType(data['institutionConsentId'], 'String');
      }
      if (data.hasOwnProperty('paymentLifecycleId')) {
        obj['paymentLifecycleId'] = ApiClient.convertToType(data['paymentLifecycleId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusDetails')) {
        obj['statusDetails'] = PaymentStatusDetails.constructFromObject(data['statusDetails']);
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('amountDetails')) {
        obj['amountDetails'] = Amount.constructFromObject(data['amountDetails']);
      }
      if (data.hasOwnProperty('chargeDetails')) {
        obj['chargeDetails'] = ApiClient.convertToType(data['chargeDetails'], [ChargeDetails]);
      }
      if (data.hasOwnProperty('payeeDetails')) {
        obj['payeeDetails'] = Payee.constructFromObject(data['payeeDetails']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} institutionConsentId
   */
  exports.prototype['institutionConsentId'] = undefined;
  /**
   * @member {String} paymentLifecycleId
   */
  exports.prototype['paymentLifecycleId'] = undefined;
  /**
   * @member {module:model/PaymentResponse.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/PaymentStatusDetails} statusDetails
   */
  exports.prototype['statusDetails'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {module:model/Amount} amountDetails
   */
  exports.prototype['amountDetails'] = undefined;
  /**
   * @member {Array.<module:model/ChargeDetails>} chargeDetails
   */
  exports.prototype['chargeDetails'] = undefined;
  /**
   * @member {module:model/Payee} payeeDetails
   */
  exports.prototype['payeeDetails'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",
    /**
     * value: "DECLINED"
     * @const
     */
    "DECLINED": "DECLINED",
    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED",
    /**
     * value: "EXPIRED"
     * @const
     */
    "EXPIRED": "EXPIRED",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


