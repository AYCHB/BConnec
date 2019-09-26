/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.145
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YapilyApi);
  }
}(this, function(expect, YapilyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YapilyApi.PaymentResponse();
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

  describe('PaymentResponse', function() {
    it('should create an instance of PaymentResponse', function() {
      // uncomment below and update the code to test PaymentResponse
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be.a(YapilyApi.PaymentResponse);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentIdempotencyId (base name: "paymentIdempotencyId")', function() {
      // uncomment below and update the code to test the property paymentIdempotencyId
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property institutionConsentId (base name: "institutionConsentId")', function() {
      // uncomment below and update the code to test the property institutionConsentId
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property paymentLifecycleId (base name: "paymentLifecycleId")', function() {
      // uncomment below and update the code to test the property paymentLifecycleId
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property statusDetails (base name: "statusDetails")', function() {
      // uncomment below and update the code to test the property statusDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property payeeDetails (base name: "payeeDetails")', function() {
      // uncomment below and update the code to test the property payeeDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property amountDetails (base name: "amountDetails")', function() {
      // uncomment below and update the code to test the property amountDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstPaymentAmountDetails (base name: "firstPaymentAmountDetails")', function() {
      // uncomment below and update the code to test the property firstPaymentAmountDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property firstPaymentDateTime (base name: "firstPaymentDateTime")', function() {
      // uncomment below and update the code to test the property firstPaymentDateTime
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentAmountDetails (base name: "nextPaymentAmountDetails")', function() {
      // uncomment below and update the code to test the property nextPaymentAmountDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property nextPaymentDateTime (base name: "nextPaymentDateTime")', function() {
      // uncomment below and update the code to test the property nextPaymentDateTime
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentAmountDetails (base name: "finalPaymentAmountDetails")', function() {
      // uncomment below and update the code to test the property finalPaymentAmountDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property finalPaymentDateTime (base name: "finalPaymentDateTime")', function() {
      // uncomment below and update the code to test the property finalPaymentDateTime
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousPaymentAmountDetails (base name: "previousPaymentAmountDetails")', function() {
      // uncomment below and update the code to test the property previousPaymentAmountDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property previousPaymentDateTime (base name: "previousPaymentDateTime")', function() {
      // uncomment below and update the code to test the property previousPaymentDateTime
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property chargeDetails (base name: "chargeDetails")', function() {
      // uncomment below and update the code to test the property chargeDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property scheduledPaymentType (base name: "scheduledPaymentType")', function() {
      // uncomment below and update the code to test the property scheduledPaymentType
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property scheduledPaymentDateTime (base name: "scheduledPaymentDateTime")', function() {
      // uncomment below and update the code to test the property scheduledPaymentDateTime
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property frequencyDetails (base name: "frequencyDetails")', function() {
      // uncomment below and update the code to test the property frequencyDetails
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new YapilyApi.PaymentResponse();
      //expect(instance).to.be();
    });

  });

}));
