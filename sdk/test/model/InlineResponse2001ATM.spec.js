/**
 * Yapily API
 * To access endpoints that require authentication, use your application key and secret created in the Dashboard (https://dashboard.yapily.com)
 *
 * OpenAPI spec version: 0.0.136
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
    instance = new YapilyApi.InlineResponse2001ATM();
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

  describe('InlineResponse2001ATM', function() {
    it('should create an instance of InlineResponse2001ATM', function() {
      // uncomment below and update the code to test InlineResponse2001ATM
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be.a(YapilyApi.InlineResponse2001ATM);
    });

    it('should have the property aTMServices (base name: "ATMServices")', function() {
      // uncomment below and update the code to test the property aTMServices
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property access24HoursIndicator (base name: "Access24HoursIndicator")', function() {
      // uncomment below and update the code to test the property access24HoursIndicator
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property accessibility (base name: "Accessibility")', function() {
      // uncomment below and update the code to test the property accessibility
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property branch (base name: "Branch")', function() {
      // uncomment below and update the code to test the property branch
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property identification (base name: "Identification")', function() {
      // uncomment below and update the code to test the property identification
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property location (base name: "Location")', function() {
      // uncomment below and update the code to test the property location
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property minimumPossibleAmount (base name: "MinimumPossibleAmount")', function() {
      // uncomment below and update the code to test the property minimumPossibleAmount
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property note (base name: "Note")', function() {
      // uncomment below and update the code to test the property note
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property otherATMServices (base name: "OtherATMServices")', function() {
      // uncomment below and update the code to test the property otherATMServices
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property otherAccessibility (base name: "OtherAccessibility")', function() {
      // uncomment below and update the code to test the property otherAccessibility
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property supportedCurrencies (base name: "SupportedCurrencies")', function() {
      // uncomment below and update the code to test the property supportedCurrencies
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

    it('should have the property supportedLanguages (base name: "SupportedLanguages")', function() {
      // uncomment below and update the code to test the property supportedLanguages
      //var instane = new YapilyApi.InlineResponse2001ATM();
      //expect(instance).to.be();
    });

  });

}));
