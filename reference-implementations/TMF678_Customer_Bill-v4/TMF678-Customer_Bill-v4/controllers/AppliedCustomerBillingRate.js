'use strict';

var url = require('url');

var AppliedCustomerBillingRate = require('../service/AppliedCustomerBillingRateService');

module.exports.listAppliedCustomerBillingRate = function listAppliedCustomerBillingRate (req, res, next) {
  AppliedCustomerBillingRate.listAppliedCustomerBillingRate(req, res, next);
};

module.exports.retrieveAppliedCustomerBillingRate = function retrieveAppliedCustomerBillingRate (req, res, next) {
  AppliedCustomerBillingRate.retrieveAppliedCustomerBillingRate(req, res, next);
};
