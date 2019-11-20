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
 * The CreditCheck model module.
 * @module model/CreditCheck
 * @version 0.0.161
 */
class CreditCheck {
    /**
     * Constructs a new <code>CreditCheck</code>.
     * Credit check criteria that the account holder will need to meet to take out the PCA product
     * @alias module:model/CreditCheck
     */
    constructor() { 
        
        CreditCheck.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreditCheck</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreditCheck} obj Optional instance to populate.
     * @return {module:model/CreditCheck} The populated <code>CreditCheck</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreditCheck();

            if (data.hasOwnProperty('Notes')) {
                obj['Notes'] = ApiClient.convertToType(data['Notes'], ['String']);
            }
            if (data.hasOwnProperty('ScoringType')) {
                obj['ScoringType'] = ApiClient.convertToType(data['ScoringType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} Notes
 */
CreditCheck.prototype['Notes'] = undefined;

/**
 * @member {module:model/CreditCheck.ScoringTypeEnum} ScoringType
 */
CreditCheck.prototype['ScoringType'] = undefined;





/**
 * Allowed values for the <code>ScoringType</code> property.
 * @enum {String}
 * @readonly
 */
CreditCheck['ScoringTypeEnum'] = {

    /**
     * value: "Hard"
     * @const
     */
    "Hard": "Hard",

    /**
     * value: "Soft"
     * @const
     */
    "Soft": "Soft"
};



export default CreditCheck;

