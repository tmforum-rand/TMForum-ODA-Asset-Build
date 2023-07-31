'use strict';

var url = require('url');

var AccumulatedBalance = require('../service/AccumulatedBalanceService');

module.exports.listAccumulatedBalance = function listAccumulatedBalance (req, res, next) {
  AccumulatedBalance.listAccumulatedBalance(req, res, next);
};

module.exports.retrieveAccumulatedBalance = function retrieveAccumulatedBalance (req, res, next) {
  AccumulatedBalance.retrieveAccumulatedBalance(req, res, next);
};
