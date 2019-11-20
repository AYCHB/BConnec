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
 * The Branch model module.
 * @module model/Branch
 * @version 0.0.161
 */
class Branch {
    /**
     * Constructs a new <code>Branch</code>.
     * Information that locates and identifies a specific branch of a financial institution.
     * @alias module:model/Branch
     */
    constructor() { 
        
        Branch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Branch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Branch} obj Optional instance to populate.
     * @return {module:model/Branch} The populated <code>Branch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Branch();

            if (data.hasOwnProperty('Identification')) {
                obj['Identification'] = ApiClient.convertToType(data['Identification'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Identification
 */
Branch.prototype['Identification'] = undefined;






export default Branch;

