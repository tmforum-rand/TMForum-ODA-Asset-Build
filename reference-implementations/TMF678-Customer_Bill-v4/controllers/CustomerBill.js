'use strict';

var url = require('url');

var CustomerBill = require('../service/CustomerBillService');

module.exports.listCustomerBill = function listCustomerBill (req, res, next) {
  CustomerBill.listCustomerBill(req, res, next);
};

module.exports.patchCustomerBill = function patchCustomerBill (req, res, next) {
  CustomerBill.patchCustomerBill(req, res, next);
};

module.exports.retrieveCustomerBill = function retrieveCustomerBill (req, res, next) {
  CustomerBill.retrieveCustomerBill(req, res, next);
};
