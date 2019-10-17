/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.154
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
    instance = new YapilyApi.SortCodePaymentAuthRequest();
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

  describe('SortCodePaymentAuthRequest', function() {
    it('should create an instance of SortCodePaymentAuthRequest', function() {
      // uncomment below and update the code to test SortCodePaymentAuthRequest
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be.a(YapilyApi.SortCodePaymentAuthRequest);
    });

    it('should have the property userUuid (base name: "userUuid")', function() {
      // uncomment below and update the code to test the property userUuid
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property applicationUserId (base name: "applicationUserId")', function() {
      // uncomment below and update the code to test the property applicationUserId
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property forwardParameters (base name: "forwardParameters")', function() {
      // uncomment below and update the code to test the property forwardParameters
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property institutionId (base name: "institutionId")', function() {
      // uncomment below and update the code to test the property institutionId
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property callback (base name: "callback")', function() {
      // uncomment below and update the code to test the property callback
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property oneTimeToken (base name: "oneTimeToken")', function() {
      // uncomment below and update the code to test the property oneTimeToken
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

    it('should have the property paymentRequest (base name: "paymentRequest")', function() {
      // uncomment below and update the code to test the property paymentRequest
      //var instane = new YapilyApi.SortCodePaymentAuthRequest();
      //expect(instance).to.be();
    });

  });

}));
