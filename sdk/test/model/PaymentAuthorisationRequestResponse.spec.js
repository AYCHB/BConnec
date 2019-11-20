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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.PaymentAuthorisationRequestResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PaymentAuthorisationRequestResponse', function() {
    it('should create an instance of PaymentAuthorisationRequestResponse', function() {
      // uncomment below and update the code to test PaymentAuthorisationRequestResponse
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be.a(YapilyApi.PaymentAuthorisationRequestResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property referenceId (base name: "referenceId")', function() {
      // uncomment below and update the code to test the property referenceId
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionFrom (base name: "transactionFrom")', function() {
      // uncomment below and update the code to test the property transactionFrom
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property transactionTo (base name: "transactionTo")', function() {
      // uncomment below and update the code to test the property transactionTo
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property expiresAt (base name: "expiresAt")', function() {
      // uncomment below and update the code to test the property expiresAt
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeToExpireInMillis (base name: "timeToExpireInMillis")', function() {
      // uncomment below and update the code to test the property timeToExpireInMillis
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property timeToExpire (base name: "timeToExpire")', function() {
      // uncomment below and update the code to test the property timeToExpire
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property featureScope (base name: "featureScope")', function() {
      // uncomment below and update the code to test the property featureScope
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property startsAt (base name: "startsAt")', function() {
      // uncomment below and update the code to test the property startsAt
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property totalMaxAmount (base name: "totalMaxAmount")', function() {
      // uncomment below and update the code to test the property totalMaxAmount
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property maxAmountPerRequest (base name: "maxAmountPerRequest")', function() {
      // uncomment below and update the code to test the property maxAmountPerRequest
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property allowOverdraft (base name: "allowOverdraft")', function() {
      // uncomment below and update the code to test the property allowOverdraft
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property consentToken (base name: "consentToken")', function() {
      // uncomment below and update the code to test the property consentToken
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

    it('should have the property authorisationUrl (base name: "authorisationUrl")', function() {
      // uncomment below and update the code to test the property authorisationUrl
      //var instane = new YapilyApi.PaymentAuthorisationRequestResponse();
      //expect(instance).to.be();
    });

  });

}));
