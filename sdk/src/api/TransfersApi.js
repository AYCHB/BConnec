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


import ApiClient from "../ApiClient";
import ApiResponseOfTransferResponse from '../model/ApiResponseOfTransferResponse';
import TransferRequest from '../model/TransferRequest';

/**
* Transfers service.
* @module api/TransfersApi
* @version 0.0.161
*/
export default class TransfersApi {

    /**
    * Constructs a new TransfersApi. 
    * @alias module:api/TransfersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the transferUsingPUT operation.
     * @callback module:api/TransfersApi~transferUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ApiResponseOfTransferResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfer money from one account to another account accessible with the same consent
     * @param {String} consent Consent Token
     * @param {String} accountId accountId
     * @param {Object} opts Optional parameters
     * @param {module:model/TransferRequest} opts.transferRequest transferRequest
     * @param {module:api/TransfersApi~transferUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ApiResponseOfTransferResponse}
     */
    transferUsingPUT(consent, accountId, opts, callback) {
      opts = opts || {};
      let postBody = opts['transferRequest'];
      // verify the required parameter 'consent' is set
      if (consent === undefined || consent === null) {
        throw new Error("Missing the required parameter 'consent' when calling transferUsingPUT");
      }
      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling transferUsingPUT");
      }

      let pathParams = {
        'accountId': accountId
      };
      let queryParams = {
      };
      let headerParams = {
        'consent': consent
      };
      let formParams = {
      };

      let authNames = ['basicAuth', 'tokenAuth'];
      let contentTypes = ['application/json;charset=UTF-8'];
      let accepts = ['application/json;charset=UTF-8'];
      let returnType = ApiResponseOfTransferResponse;
      return this.apiClient.callApi(
        '/accounts/{accountId}/transfer', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
