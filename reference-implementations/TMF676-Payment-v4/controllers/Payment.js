'use strict';

var url = require('url');

var Payment = require('../service/PaymentService');

module.exports.createPayment = function createPayment (req, res, next) {
  Payment.createPayment(req, res, next);
};

module.exports.listPayment = function listPayment (req, res, next) {
  Payment.listPayment(req, res, next);
};

module.exports.retrievePayment = function retrievePayment (req, res, next) {
  Payment.retrievePayment(req, res, next);
};
