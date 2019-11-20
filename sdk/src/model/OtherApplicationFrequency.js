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
 * The OtherApplicationFrequency model module.
 * @module model/OtherApplicationFrequency
 * @version 0.0.161
 */
class OtherApplicationFrequency {
    /**
     * Constructs a new <code>OtherApplicationFrequency</code>.
     * Other application frequencies that are not available in the standard code list
     * @alias module:model/OtherApplicationFrequency
     */
    constructor() { 
        
        OtherApplicationFrequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OtherApplicationFrequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OtherApplicationFrequency} obj Optional instance to populate.
     * @return {module:model/OtherApplicationFrequency} The populated <code>OtherApplicationFrequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OtherApplicationFrequency();

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
OtherApplicationFrequency.prototype['Code'] = undefined;

/**
 * @member {String} Description
 */
OtherApplicationFrequency.prototype['Description'] = undefined;

/**
 * @member {String} Name
 */
OtherApplicationFrequency.prototype['Name'] = undefined;






export default OtherApplicationFrequency;

