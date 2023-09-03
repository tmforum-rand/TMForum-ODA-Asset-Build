'use strict';

var url = require('url');

var CheckProductStock = require('../service/CheckProductStockService');

module.exports.createCheckProductStock = function createCheckProductStock (req, res, next) {
  CheckProductStock.createCheckProductStock(req, res, next);
};

module.exports.listCheckProductStock = function listCheckProductStock (req, res, next) {
  CheckProductStock.listCheckProductStock(req, res, next);
};

module.exports.retrieveCheckProductStock = function retrieveCheckProductStock (req, res, next) {
  CheckProductStock.retrieveCheckProductStock(req, res, next);
};
