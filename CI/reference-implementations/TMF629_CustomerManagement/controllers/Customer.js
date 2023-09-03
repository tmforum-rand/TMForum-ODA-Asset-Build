'use strict';

var url = require('url');

var Customer = require('../service/CustomerService');

module.exports.createCustomer = function createCustomer (req, res, next) {
  Customer.createCustomer(req, res, next);
};

module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
  Customer.deleteCustomer(req, res, next);
};

module.exports.listCustomer = function listCustomer (req, res, next) {
  Customer.listCustomer(req, res, next);
};

module.exports.patchCustomer = function patchCustomer (req, res, next) {
  Customer.patchCustomer(req, res, next);
};

module.exports.retrieveCustomer = function retrieveCustomer (req, res, next) {
  Customer.retrieveCustomer(req, res, next);
};
