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
 * The ConsentDeleteResponse model module.
 * @module model/ConsentDeleteResponse
 * @version 0.0.161
 */
class ConsentDeleteResponse {
    /**
     * Constructs a new <code>ConsentDeleteResponse</code>.
     * @alias module:model/ConsentDeleteResponse
     */
    constructor() { 
        
        ConsentDeleteResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConsentDeleteResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConsentDeleteResponse} obj Optional instance to populate.
     * @return {module:model/ConsentDeleteResponse} The populated <code>ConsentDeleteResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConsentDeleteResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('deleteStatus')) {
                obj['deleteStatus'] = ApiClient.convertToType(data['deleteStatus'], 'String');
            }
            if (data.hasOwnProperty('institutionId')) {
                obj['institutionId'] = ApiClient.convertToType(data['institutionId'], 'String');
            }
            if (data.hasOwnProperty('institutionConsentId')) {
                obj['institutionConsentId'] = ApiClient.convertToType(data['institutionConsentId'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ConsentDeleteResponse.prototype['id'] = undefined;

/**
 * @member {module:model/ConsentDeleteResponse.DeleteStatusEnum} deleteStatus
 */
ConsentDeleteResponse.prototype['deleteStatus'] = undefined;

/**
 * @member {String} institutionId
 */
ConsentDeleteResponse.prototype['institutionId'] = undefined;

/**
 * @member {String} institutionConsentId
 */
ConsentDeleteResponse.prototype['institutionConsentId'] = undefined;

/**
 * @member {Date} creationDate
 */
ConsentDeleteResponse.prototype['creationDate'] = undefined;





/**
 * Allowed values for the <code>deleteStatus</code> property.
 * @enum {String}
 * @readonly
 */
ConsentDeleteResponse['DeleteStatusEnum'] = {

    /**
     * value: "SUCCESS"
     * @const
     */
    "SUCCESS": "SUCCESS",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED"
};



export default ConsentDeleteResponse;

