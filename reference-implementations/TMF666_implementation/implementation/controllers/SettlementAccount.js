'use strict';

var url = require('url');

var SettlementAccount = require('../service/SettlementAccountService');

module.exports.createSettlementAccount = function createSettlementAccount (req, res, next) {
  SettlementAccount.createSettlementAccount(req, res, next);
};

module.exports.deleteSettlementAccount = function deleteSettlementAccount (req, res, next) {
  SettlementAccount.deleteSettlementAccount(req, res, next);
};

module.exports.listSettlementAccount = function listSettlementAccount (req, res, next) {
  SettlementAccount.listSettlementAccount(req, res, next);
};

module.exports.patchSettlementAccount = function patchSettlementAccount (req, res, next) {
  SettlementAccount.patchSettlementAccount(req, res, next);
};

module.exports.retrieveSettlementAccount = function retrieveSettlementAccount (req, res, next) {
  SettlementAccount.retrieveSettlementAccount(req, res, next);
};
