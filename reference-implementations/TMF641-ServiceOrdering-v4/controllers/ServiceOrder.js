'use strict';

var url = require('url');

var ServiceOrder = require('../service/ServiceOrderService');

module.exports.createServiceOrder = function createServiceOrder (req, res, next) {
  ServiceOrder.createServiceOrder(req, res, next);
};

module.exports.deleteServiceOrder = function deleteServiceOrder (req, res, next) {
  ServiceOrder.deleteServiceOrder(req, res, next);
};

module.exports.listServiceOrder = function listServiceOrder (req, res, next) {
  ServiceOrder.listServiceOrder(req, res, next);
};

module.exports.patchServiceOrder = function patchServiceOrder (req, res, next) {
  ServiceOrder.patchServiceOrder(req, res, next);
};

module.exports.retrieveServiceOrder = function retrieveServiceOrder (req, res, next) {
  ServiceOrder.retrieveServiceOrder(req, res, next);
};
