'use strict';

var url = require('url');

var AdjustProductStock = require('../service/AdjustProductStockService');

module.exports.createAdjustProductStock = function createAdjustProductStock (req, res, next) {
  AdjustProductStock.createAdjustProductStock(req, res, next);
};

module.exports.listAdjustProductStock = function listAdjustProductStock (req, res, next) {
  AdjustProductStock.listAdjustProductStock(req, res, next);
};

module.exports.retrieveAdjustProductStock = function retrieveAdjustProductStock (req, res, next) {
  AdjustProductStock.retrieveAdjustProductStock(req, res, next);
};
