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
import Amount from './Amount';

/**
 * The CreditLine model module.
 * @module model/CreditLine
 * @version 0.0.161
 */
class CreditLine {
    /**
     * Constructs a new <code>CreditLine</code>.
     * @alias module:model/CreditLine
     */
    constructor() { 
        
        CreditLine.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditLine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditLine} obj Optional instance to populate.
     * @return {module:model/CreditLine} The populated <code>CreditLine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditLine();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('creditLineAmount')) {
                obj['creditLineAmount'] = Amount.constructFromObject(data['creditLineAmount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreditLine.TypeEnum} type
 */
CreditLine.prototype['type'] = undefined;

/**
 * @member {module:model/Amount} creditLineAmount
 */
CreditLine.prototype['creditLineAmount'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CreditLine['TypeEnum'] = {

    /**
     * value: "AVAILABLE"
     * @const
     */
    "AVAILABLE": "AVAILABLE",

    /**
     * value: "CREDIT"
     * @const
     */
    "CREDIT": "CREDIT",

    /**
     * value: "EMERGENCY"
     * @const
     */
    "EMERGENCY": "EMERGENCY",

    /**
     * value: "PRE_AGREED"
     * @const
     */
    "PRE_AGREED": "PRE_AGREED",

    /**
     * value: "TEMPORARY"
     * @const
     */
    "TEMPORARY": "TEMPORARY",

    /**
     * value: "OTHER"
     * @const
     */
    "OTHER": "OTHER",

    /**
     * value: "UNKNOWN"
     * @const
     */
    "UNKNOWN": "UNKNOWN"
};



export default CreditLine;

