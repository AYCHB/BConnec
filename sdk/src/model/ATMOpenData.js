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
import ATMOpenDataBrand from './ATMOpenDataBrand';

/**
 * The ATMOpenData model module.
 * @module model/ATMOpenData
 * @version 0.0.161
 */
class ATMOpenData {
    /**
     * Constructs a new <code>ATMOpenData</code>.
     * Environment of the ATM.
     * @alias module:model/ATMOpenData
     */
    constructor() { 
        
        ATMOpenData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ATMOpenData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ATMOpenData} obj Optional instance to populate.
     * @return {module:model/ATMOpenData} The populated <code>ATMOpenData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ATMOpenData();

            if (data.hasOwnProperty('Brand')) {
                obj['Brand'] = ApiClient.convertToType(data['Brand'], [ATMOpenDataBrand]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/ATMOpenDataBrand>} Brand
 */
ATMOpenData.prototype['Brand'] = undefined;






export default ATMOpenData;

