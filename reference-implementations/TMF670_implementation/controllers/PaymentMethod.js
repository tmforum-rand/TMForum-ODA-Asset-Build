'use strict';

var url = require('url');

var PaymentMethod = require('../service/PaymentMethodService');

module.exports.createPaymentMethod = function createPaymentMethod (req, res, next) {
  PaymentMethod.createPaymentMethod(req, res, next);
};

module.exports.deletePaymentMethod = function deletePaymentMethod (req, res, next) {
  PaymentMethod.deletePaymentMethod(req, res, next);
};

module.exports.listPaymentMethod = function listPaymentMethod (req, res, next) {
  PaymentMethod.listPaymentMethod(req, res, next);
};

module.exports.patchPaymentMethod = function patchPaymentMethod (req, res, next) {
  PaymentMethod.patchPaymentMethod(req, res, next);
};

module.exports.retrievePaymentMethod = function retrievePaymentMethod (req, res, next) {
  PaymentMethod.retrievePaymentMethod(req, res, next);
};
