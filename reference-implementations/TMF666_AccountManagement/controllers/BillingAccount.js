'use strict';

var url = require('url');

var BillingAccount = require('../service/BillingAccountService');

module.exports.createBillingAccount = function createBillingAccount (req, res, next) {
  BillingAccount.createBillingAccount(req, res, next);
};

module.exports.deleteBillingAccount = function deleteBillingAccount (req, res, next) {
  BillingAccount.deleteBillingAccount(req, res, next);
};

module.exports.listBillingAccount = function listBillingAccount (req, res, next) {
  BillingAccount.listBillingAccount(req, res, next);
};

module.exports.patchBillingAccount = function patchBillingAccount (req, res, next) {
  BillingAccount.patchBillingAccount(req, res, next);
};

module.exports.retrieveBillingAccount = function retrieveBillingAccount (req, res, next) {
  BillingAccount.retrieveBillingAccount(req, res, next);
};
