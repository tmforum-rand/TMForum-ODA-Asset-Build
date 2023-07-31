'use strict';

var url = require('url');

var CancelServiceOrder = require('../service/CancelServiceOrderService');

module.exports.createCancelServiceOrder = function createCancelServiceOrder (req, res, next) {
  CancelServiceOrder.createCancelServiceOrder(req, res, next);
};

module.exports.listCancelServiceOrder = function listCancelServiceOrder (req, res, next) {
  CancelServiceOrder.listCancelServiceOrder(req, res, next);
};

module.exports.retrieveCancelServiceOrder = function retrieveCancelServiceOrder (req, res, next) {
  CancelServiceOrder.retrieveCancelServiceOrder(req, res, next);
};
