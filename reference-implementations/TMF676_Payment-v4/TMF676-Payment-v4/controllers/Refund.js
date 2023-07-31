'use strict';

var url = require('url');

var Refund = require('../service/RefundService');

module.exports.createRefund = function createRefund (req, res, next) {
  Refund.createRefund(req, res, next);
};

module.exports.listRefund = function listRefund (req, res, next) {
  Refund.listRefund(req, res, next);
};

module.exports.retrieveRefund = function retrieveRefund (req, res, next) {
  Refund.retrieveRefund(req, res, next);
};
