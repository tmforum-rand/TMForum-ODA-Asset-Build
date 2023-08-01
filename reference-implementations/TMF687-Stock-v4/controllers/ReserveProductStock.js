'use strict';

var url = require('url');

var ReserveProductStock = require('../service/ReserveProductStockService');

module.exports.createReserveProductStock = function createReserveProductStock (req, res, next) {
  ReserveProductStock.createReserveProductStock(req, res, next);
};

module.exports.listReserveProductStock = function listReserveProductStock (req, res, next) {
  ReserveProductStock.listReserveProductStock(req, res, next);
};

module.exports.retrieveReserveProductStock = function retrieveReserveProductStock (req, res, next) {
  ReserveProductStock.retrieveReserveProductStock(req, res, next);
};
