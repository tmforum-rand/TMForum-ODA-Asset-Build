'use strict';

var url = require('url');

var AbstractEnvironment = require('../service/AbstractEnvironmentService');

module.exports.createAbstractEnvironment = function createAbstractEnvironment (req, res, next) {
  AbstractEnvironment.createAbstractEnvironment(req, res, next);
};

module.exports.deleteAbstractEnvironment = function deleteAbstractEnvironment (req, res, next) {
  AbstractEnvironment.deleteAbstractEnvironment(req, res, next);
};

module.exports.listAbstractEnvironment = function listAbstractEnvironment (req, res, next) {
  AbstractEnvironment.listAbstractEnvironment(req, res, next);
};

module.exports.patchAbstractEnvironment = function patchAbstractEnvironment (req, res, next) {
  AbstractEnvironment.patchAbstractEnvironment(req, res, next);
};

module.exports.retrieveAbstractEnvironment = function retrieveAbstractEnvironment (req, res, next) {
  AbstractEnvironment.retrieveAbstractEnvironment(req, res, next);
};
