'use strict';

var url = require('url');

var Usage = require('../service/UsageService');

module.exports.createUsage = function createUsage (req, res, next) {
  Usage.createUsage(req, res, next);
};

module.exports.deleteUsage = function deleteUsage (req, res, next) {
  Usage.deleteUsage(req, res, next);
};

module.exports.listUsage = function listUsage (req, res, next) {
  Usage.listUsage(req, res, next);
};

module.exports.patchUsage = function patchUsage (req, res, next) {
  Usage.patchUsage(req, res, next);
};

module.exports.retrieveUsage = function retrieveUsage (req, res, next) {
  Usage.retrieveUsage(req, res, next);
};
