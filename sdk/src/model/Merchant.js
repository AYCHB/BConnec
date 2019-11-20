/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * The version of the OpenAPI document: 0.0.161
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Merchant model module.
 * @module model/Merchant
 * @version 0.0.161
 */
class Merchant {
    /**
     * Constructs a new <code>Merchant</code>.
     * @alias module:model/Merchant
     */
    constructor() { 
        
        Merchant.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Merchant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Merchant} obj Optional instance to populate.
     * @return {module:model/Merchant} The populated <code>Merchant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Merchant();

            if (data.hasOwnProperty('merchantName')) {
                obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
            }
            if (data.hasOwnProperty('merchantCategoryCode')) {
                obj['merchantCategoryCode'] = ApiClient.convertToType(data['merchantCategoryCode'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} merchantName
 */
Merchant.prototype['merchantName'] = undefined;

/**
 * @member {String} merchantCategoryCode
 */
Merchant.prototype['merchantCategoryCode'] = undefined;






export default Merchant;

