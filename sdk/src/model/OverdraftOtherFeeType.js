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
 * The OverdraftOtherFeeType model module.
 * @module model/OverdraftOtherFeeType
 * @version 0.0.161
 */
class OverdraftOtherFeeType {
    /**
     * Constructs a new <code>OverdraftOtherFeeType</code>.
     * Other fee type code which is not available in the standard code set
     * @alias module:model/OverdraftOtherFeeType
     */
    constructor() { 
        
        OverdraftOtherFeeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OverdraftOtherFeeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OverdraftOtherFeeType} obj Optional instance to populate.
     * @return {module:model/OverdraftOtherFeeType} The populated <code>OverdraftOtherFeeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OverdraftOtherFeeType();

            if (data.hasOwnProperty('Code')) {
                obj['Code'] = ApiClient.convertToType(data['Code'], 'String');
            }
            if (data.hasOwnProperty('Description')) {
                obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Code
 */
OverdraftOtherFeeType.prototype['Code'] = undefined;

/**
 * @member {String} Description
 */
OverdraftOtherFeeType.prototype['Description'] = undefined;

/**
 * @member {String} Name
 */
OverdraftOtherFeeType.prototype['Name'] = undefined;






export default OverdraftOtherFeeType;

