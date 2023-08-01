'use strict';

var url = require('url');

var ProductStock = require('../service/ProductStockService');

module.exports.createProductStock = function createProductStock (req, res, next) {
  ProductStock.createProductStock(req, res, next);
};

module.exports.deleteProductStock = function deleteProductStock (req, res, next) {
  ProductStock.deleteProductStock(req, res, next);
};

module.exports.listProductStock = function listProductStock (req, res, next) {
  ProductStock.listProductStock(req, res, next);
};

module.exports.patchProductStock = function patchProductStock (req, res, next) {
  ProductStock.patchProductStock(req, res, next);
};

module.exports.retrieveProductStock = function retrieveProductStock (req, res, next) {
  ProductStock.retrieveProductStock(req, res, next);
};
