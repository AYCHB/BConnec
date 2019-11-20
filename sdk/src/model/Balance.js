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
 * The Balance model module.
 * @module model/Balance
 * @version 0.0.161
 */
class Balance {
    /**
     * Constructs a new <code>Balance</code>.
     * @alias module:model/Balance
     */
    constructor() { 
        
        Balance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Balance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Balance} obj Optional instance to populate.
     * @return {module:model/Balance} The populated <code>Balance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Balance();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('balanceAmount')) {
                obj['balanceAmount'] = Amount.constructFromObject(data['balanceAmount']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Balance.TypeEnum} type
 */
Balance.prototype['type'] = undefined;

/**
 * @member {module:model/Amount} balanceAmount
 */
Balance.prototype['balanceAmount'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Balance['TypeEnum'] = {

    /**
     * value: "CLOSING_AVAILABLE"
     * @const
     */
    "CLOSING_AVAILABLE": "CLOSING_AVAILABLE",

    /**
     * value: "CLOSING_BOOKED"
     * @const
     */
    "CLOSING_BOOKED": "CLOSING_BOOKED",

    /**
     * value: "CLOSING_CLEARED"
     * @const
     */
    "CLOSING_CLEARED": "CLOSING_CLEARED",

    /**
     * value: "EXPECTED"
     * @const
     */
    "EXPECTED": "EXPECTED",

    /**
     * value: "FORWARD_AVAILABLE"
     * @const
     */
    "FORWARD_AVAILABLE": "FORWARD_AVAILABLE",

    /**
     * value: "INFORMATION"
     * @const
     */
    "INFORMATION": "INFORMATION",

    /**
     * value: "INTERIM_AVAILABLE"
     * @const
     */
    "INTERIM_AVAILABLE": "INTERIM_AVAILABLE",

    /**
     * value: "INTERIM_BOOKED"
     * @const
     */
    "INTERIM_BOOKED": "INTERIM_BOOKED",

    /**
     * value: "INTERIM_CLEARED"
     * @const
     */
    "INTERIM_CLEARED": "INTERIM_CLEARED",

    /**
     * value: "OPENING_AVAILABLE"
     * @const
     */
    "OPENING_AVAILABLE": "OPENING_AVAILABLE",

    /**
     * value: "OPENING_BOOKED"
     * @const
     */
    "OPENING_BOOKED": "OPENING_BOOKED",

    /**
     * value: "OPENING_CLEARED"
     * @const
     */
    "OPENING_CLEARED": "OPENING_CLEARED",

    /**
     * value: "PREVIOUSLY_CLOSED_BOOKED"
     * @const
     */
    "PREVIOUSLY_CLOSED_BOOKED": "PREVIOUSLY_CLOSED_BOOKED",

    /**
     * value: "AUTHORISED"
     * @const
     */
    "AUTHORISED": "AUTHORISED",

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



export default Balance;

