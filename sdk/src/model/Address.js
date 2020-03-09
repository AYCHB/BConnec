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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.YapilyApi) {
      root.YapilyApi = {};
    }
    root.YapilyApi.Address = factory(root.YapilyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Address model module.
   * @module model/Address
   * @version 0.0.167
   */

  /**
   * Constructs a new <code>Address</code>.
   * @alias module:model/Address
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('addressLines')) {
        obj['addressLines'] = ApiClient.convertToType(data['addressLines'], ['String']);
      }
      if (data.hasOwnProperty('streetName')) {
        obj['streetName'] = ApiClient.convertToType(data['streetName'], 'String');
      }
      if (data.hasOwnProperty('buildingNumber')) {
        obj['buildingNumber'] = ApiClient.convertToType(data['buildingNumber'], 'String');
      }
      if (data.hasOwnProperty('postCode')) {
        obj['postCode'] = ApiClient.convertToType(data['postCode'], 'String');
      }
      if (data.hasOwnProperty('townName')) {
        obj['townName'] = ApiClient.convertToType(data['townName'], 'String');
      }
      if (data.hasOwnProperty('county')) {
        obj['county'] = ApiClient.convertToType(data['county'], ['String']);
      }
      if (data.hasOwnProperty('addressType')) {
        obj['addressType'] = ApiClient.convertToType(data['addressType'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('department')) {
        obj['department'] = ApiClient.convertToType(data['department'], 'String');
      }
      if (data.hasOwnProperty('subDepartment')) {
        obj['subDepartment'] = ApiClient.convertToType(data['subDepartment'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} addressLines
   */
  exports.prototype['addressLines'] = undefined;
  /**
   * @member {String} streetName
   */
  exports.prototype['streetName'] = undefined;
  /**
   * @member {String} buildingNumber
   */
  exports.prototype['buildingNumber'] = undefined;
  /**
   * @member {String} postCode
   */
  exports.prototype['postCode'] = undefined;
  /**
   * @member {String} townName
   */
  exports.prototype['townName'] = undefined;
  /**
   * @member {Array.<String>} county
   */
  exports.prototype['county'] = undefined;
  /**
   * @member {module:model/Address.AddressTypeEnum} addressType
   */
  exports.prototype['addressType'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} department
   */
  exports.prototype['department'] = undefined;
  /**
   * @member {String} subDepartment
   */
  exports.prototype['subDepartment'] = undefined;


  /**
   * Allowed values for the <code>addressType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AddressTypeEnum = {
    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",
    /**
     * value: "CORRESPONDENCE"
     * @const
     */
    "CORRESPONDENCE": "CORRESPONDENCE",
    /**
     * value: "DELIVERY_TO"
     * @const
     */
    "DELIVERY_TO": "DELIVERY_TO",
    /**
     * value: "MAIL_TO"
     * @const
     */
    "MAIL_TO": "MAIL_TO",
    /**
     * value: "PO_BOX"
     * @const
     */
    "PO_BOX": "PO_BOX",
    /**
     * value: "POSTAL"
     * @const
     */
    "POSTAL": "POSTAL",
    /**
     * value: "RESIDENTIAL"
     * @const
     */
    "RESIDENTIAL": "RESIDENTIAL",
    /**
     * value: "STATEMENT"
     * @const
     */
    "STATEMENT": "STATEMENT",
    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"  };


  return exports;
}));


