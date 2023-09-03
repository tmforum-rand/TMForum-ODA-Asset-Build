'use strict';

var url = require('url');

var TransferBalance = require('../service/TransferBalanceService');

module.exports.createTransferBalance = function createTransferBalance (req, res, next) {
  TransferBalance.createTransferBalance(req, res, next);
};

module.exports.deleteTransferBalance = function deleteTransferBalance (req, res, next) {
  TransferBalance.deleteTransferBalance(req, res, next);
};

module.exports.listTransferBalance = function listTransferBalance (req, res, next) {
  TransferBalance.listTransferBalance(req, res, next);
};

module.exports.patchTransferBalance = function patchTransferBalance (req, res, next) {
  TransferBalance.patchTransferBalance(req, res, next);
};

module.exports.retrieveTransferBalance = function retrieveTransferBalance (req, res, next) {
  TransferBalance.retrieveTransferBalance(req, res, next);
};
