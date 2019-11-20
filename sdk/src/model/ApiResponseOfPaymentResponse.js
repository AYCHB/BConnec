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
import PaymentResponse from './PaymentResponse';
import ResponseMeta from './ResponseMeta';

/**
 * The ApiResponseOfPaymentResponse model module.
 * @module model/ApiResponseOfPaymentResponse
 * @version 0.0.161
 */
class ApiResponseOfPaymentResponse {
    /**
     * Constructs a new <code>ApiResponseOfPaymentResponse</code>.
     * @alias module:model/ApiResponseOfPaymentResponse
     */
    constructor() { 
        
        ApiResponseOfPaymentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiResponseOfPaymentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApiResponseOfPaymentResponse} obj Optional instance to populate.
     * @return {module:model/ApiResponseOfPaymentResponse} The populated <code>ApiResponseOfPaymentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiResponseOfPaymentResponse();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = ResponseMeta.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = PaymentResponse.constructFromObject(data['data']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = ApiClient.convertToType(data['links'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ResponseMeta} meta
 */
ApiResponseOfPaymentResponse.prototype['meta'] = undefined;

/**
 * @member {module:model/PaymentResponse} data
 */
ApiResponseOfPaymentResponse.prototype['data'] = undefined;

/**
 * @member {Object.<String, String>} links
 */
ApiResponseOfPaymentResponse.prototype['links'] = undefined;






export default ApiResponseOfPaymentResponse;

