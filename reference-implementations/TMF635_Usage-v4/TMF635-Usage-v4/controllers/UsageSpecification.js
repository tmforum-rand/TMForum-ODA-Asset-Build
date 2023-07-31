'use strict';

var url = require('url');

var UsageSpecification = require('../service/UsageSpecificationService');

module.exports.createUsageSpecification = function createUsageSpecification (req, res, next) {
  UsageSpecification.createUsageSpecification(req, res, next);
};

module.exports.deleteUsageSpecification = function deleteUsageSpecification (req, res, next) {
  UsageSpecification.deleteUsageSpecification(req, res, next);
};

module.exports.listUsageSpecification = function listUsageSpecification (req, res, next) {
  UsageSpecification.listUsageSpecification(req, res, next);
};

module.exports.patchUsageSpecification = function patchUsageSpecification (req, res, next) {
  UsageSpecification.patchUsageSpecification(req, res, next);
};

module.exports.retrieveUsageSpecification = function retrieveUsageSpecification (req, res, next) {
  UsageSpecification.retrieveUsageSpecification(req, res, next);
};
