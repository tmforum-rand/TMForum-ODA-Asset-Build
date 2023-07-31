'use strict';

var url = require('url');

var ReserveBalance = require('../service/ReserveBalanceService');

module.exports.createReserveBalance = function createReserveBalance (req, res, next) {
  ReserveBalance.createReserveBalance(req, res, next);
};

module.exports.deleteReserveBalance = function deleteReserveBalance (req, res, next) {
  ReserveBalance.deleteReserveBalance(req, res, next);
};

module.exports.listReserveBalance = function listReserveBalance (req, res, next) {
  ReserveBalance.listReserveBalance(req, res, next);
};

module.exports.patchReserveBalance = function patchReserveBalance (req, res, next) {
  ReserveBalance.patchReserveBalance(req, res, next);
};

module.exports.retrieveReserveBalance = function retrieveReserveBalance (req, res, next) {
  ReserveBalance.retrieveReserveBalance(req, res, next);
};
