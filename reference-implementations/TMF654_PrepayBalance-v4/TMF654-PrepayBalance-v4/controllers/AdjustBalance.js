'use strict';

var url = require('url');

var AdjustBalance = require('../service/AdjustBalanceService');

module.exports.createAdjustBalance = function createAdjustBalance (req, res, next) {
  AdjustBalance.createAdjustBalance(req, res, next);
};

module.exports.deleteAdjustBalance = function deleteAdjustBalance (req, res, next) {
  AdjustBalance.deleteAdjustBalance(req, res, next);
};

module.exports.listAdjustBalance = function listAdjustBalance (req, res, next) {
  AdjustBalance.listAdjustBalance(req, res, next);
};

module.exports.patchAdjustBalance = function patchAdjustBalance (req, res, next) {
  AdjustBalance.patchAdjustBalance(req, res, next);
};

module.exports.retrieveAdjustBalance = function retrieveAdjustBalance (req, res, next) {
  AdjustBalance.retrieveAdjustBalance(req, res, next);
};
