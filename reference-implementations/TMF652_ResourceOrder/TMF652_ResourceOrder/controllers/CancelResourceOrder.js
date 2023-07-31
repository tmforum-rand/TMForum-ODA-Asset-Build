'use strict';

var url = require('url');

var CancelResourceOrder = require('../service/CancelResourceOrderService');

module.exports.createCancelResourceOrder = function createCancelResourceOrder (req, res, next) {
  CancelResourceOrder.createCancelResourceOrder(req, res, next);
};

module.exports.listCancelResourceOrder = function listCancelResourceOrder (req, res, next) {
  CancelResourceOrder.listCancelResourceOrder(req, res, next);
};

module.exports.retrieveCancelResourceOrder = function retrieveCancelResourceOrder (req, res, next) {
  CancelResourceOrder.retrieveCancelResourceOrder(req, res, next);
};
