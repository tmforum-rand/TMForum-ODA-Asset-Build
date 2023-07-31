'use strict';

var url = require('url');

var TopupBalance = require('../service/TopupBalanceService');

module.exports.createTopupBalance = function createTopupBalance (req, res, next) {
  TopupBalance.createTopupBalance(req, res, next);
};

module.exports.deleteTopupBalance = function deleteTopupBalance (req, res, next) {
  TopupBalance.deleteTopupBalance(req, res, next);
};

module.exports.listTopupBalance = function listTopupBalance (req, res, next) {
  TopupBalance.listTopupBalance(req, res, next);
};

module.exports.patchTopupBalance = function patchTopupBalance (req, res, next) {
  TopupBalance.patchTopupBalance(req, res, next);
};

module.exports.retrieveTopupBalance = function retrieveTopupBalance (req, res, next) {
  TopupBalance.retrieveTopupBalance(req, res, next);
};
