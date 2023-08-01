'use strict';

var url = require('url');

var FinancialAccount = require('../service/FinancialAccountService');

module.exports.createFinancialAccount = function createFinancialAccount (req, res, next) {
  FinancialAccount.createFinancialAccount(req, res, next);
};

module.exports.deleteFinancialAccount = function deleteFinancialAccount (req, res, next) {
  FinancialAccount.deleteFinancialAccount(req, res, next);
};

module.exports.listFinancialAccount = function listFinancialAccount (req, res, next) {
  FinancialAccount.listFinancialAccount(req, res, next);
};

module.exports.patchFinancialAccount = function patchFinancialAccount (req, res, next) {
  FinancialAccount.patchFinancialAccount(req, res, next);
};

module.exports.retrieveFinancialAccount = function retrieveFinancialAccount (req, res, next) {
  FinancialAccount.retrieveFinancialAccount(req, res, next);
};
