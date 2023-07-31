'use strict';

var url = require('url');

var QueryUsageConsumption = require('../service/QueryUsageConsumptionService');

module.exports.createQueryUsageConsumption = function createQueryUsageConsumption (req, res, next) {
  QueryUsageConsumption.createQueryUsageConsumption(req, res, next);
};

module.exports.deleteQueryUsageConsumption = function deleteQueryUsageConsumption (req, res, next) {
  QueryUsageConsumption.deleteQueryUsageConsumption(req, res, next);
};

module.exports.listQueryUsageConsumption = function listQueryUsageConsumption (req, res, next) {
  QueryUsageConsumption.listQueryUsageConsumption(req, res, next);
};

module.exports.retrieveQueryUsageConsumption = function retrieveQueryUsageConsumption (req, res, next) {
  QueryUsageConsumption.retrieveQueryUsageConsumption(req, res, next);
};
