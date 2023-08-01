'use strict';

var url = require('url');

var BillingCycleSpecification = require('../service/BillingCycleSpecificationService');

module.exports.createBillingCycleSpecification = function createBillingCycleSpecification (req, res, next) {
  BillingCycleSpecification.createBillingCycleSpecification(req, res, next);
};

module.exports.deleteBillingCycleSpecification = function deleteBillingCycleSpecification (req, res, next) {
  BillingCycleSpecification.deleteBillingCycleSpecification(req, res, next);
};

module.exports.listBillingCycleSpecification = function listBillingCycleSpecification (req, res, next) {
  BillingCycleSpecification.listBillingCycleSpecification(req, res, next);
};

module.exports.patchBillingCycleSpecification = function patchBillingCycleSpecification (req, res, next) {
  BillingCycleSpecification.patchBillingCycleSpecification(req, res, next);
};

module.exports.retrieveBillingCycleSpecification = function retrieveBillingCycleSpecification (req, res, next) {
  BillingCycleSpecification.retrieveBillingCycleSpecification(req, res, next);
};
