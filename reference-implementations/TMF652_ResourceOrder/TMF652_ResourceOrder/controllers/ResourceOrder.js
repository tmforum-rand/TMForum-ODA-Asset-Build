'use strict';

var url = require('url');

var ResourceOrder = require('../service/ResourceOrderService');

module.exports.createResourceOrder = function createResourceOrder (req, res, next) {
  ResourceOrder.createResourceOrder(req, res, next);
};

module.exports.deleteResourceOrder = function deleteResourceOrder (req, res, next) {
  ResourceOrder.deleteResourceOrder(req, res, next);
};

module.exports.listResourceOrder = function listResourceOrder (req, res, next) {
  ResourceOrder.listResourceOrder(req, res, next);
};

module.exports.patchResourceOrder = function patchResourceOrder (req, res, next) {
  ResourceOrder.patchResourceOrder(req, res, next);
};

module.exports.retrieveResourceOrder = function retrieveResourceOrder (req, res, next) {
  ResourceOrder.retrieveResourceOrder(req, res, next);
};
