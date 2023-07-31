'use strict';

var url = require('url');

var QueryProductStock = require('../service/QueryProductStockService');

module.exports.createQueryProductStock = function createQueryProductStock (req, res, next) {
  QueryProductStock.createQueryProductStock(req, res, next);
};

module.exports.listQueryProductStock = function listQueryProductStock (req, res, next) {
  QueryProductStock.listQueryProductStock(req, res, next);
};

module.exports.retrieveQueryProductStock = function retrieveQueryProductStock (req, res, next) {
  QueryProductStock.retrieveQueryProductStock(req, res, next);
};
