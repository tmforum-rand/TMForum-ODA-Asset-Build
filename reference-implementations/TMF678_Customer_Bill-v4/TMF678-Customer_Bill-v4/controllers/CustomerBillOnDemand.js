'use strict';

var url = require('url');

var CustomerBillOnDemand = require('../service/CustomerBillOnDemandService');

module.exports.createCustomerBillOnDemand = function createCustomerBillOnDemand (req, res, next) {
  CustomerBillOnDemand.createCustomerBillOnDemand(req, res, next);
};

module.exports.listCustomerBillOnDemand = function listCustomerBillOnDemand (req, res, next) {
  CustomerBillOnDemand.listCustomerBillOnDemand(req, res, next);
};

module.exports.retrieveCustomerBillOnDemand = function retrieveCustomerBillOnDemand (req, res, next) {
  CustomerBillOnDemand.retrieveCustomerBillOnDemand(req, res, next);
};
