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
 * The ProprietaryBankTransactionCode model module.
 * @module model/ProprietaryBankTransactionCode
 * @version 0.0.161
 */
class ProprietaryBankTransactionCode {
    /**
     * Constructs a new <code>ProprietaryBankTransactionCode</code>.
     * @alias module:model/ProprietaryBankTransactionCode
     */
    constructor() { 
        
        ProprietaryBankTransactionCode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProprietaryBankTransactionCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProprietaryBankTransactionCode} obj Optional instance to populate.
     * @return {module:model/ProprietaryBankTransactionCode} The populated <code>ProprietaryBankTransactionCode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProprietaryBankTransactionCode();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('issuer')) {
                obj['issuer'] = ApiClient.convertToType(data['issuer'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
ProprietaryBankTransactionCode.prototype['code'] = undefined;

/**
 * @member {String} issuer
 */
ProprietaryBankTransactionCode.prototype['issuer'] = undefined;






export default ProprietaryBankTransactionCode;

