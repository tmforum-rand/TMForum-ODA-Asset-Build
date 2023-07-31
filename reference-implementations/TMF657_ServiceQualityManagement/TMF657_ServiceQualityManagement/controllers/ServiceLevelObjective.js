'use strict';

var url = require('url');

var ServiceLevelObjective = require('../service/ServiceLevelObjectiveService');

module.exports.createServiceLevelObjective = function createServiceLevelObjective (req, res, next) {
  ServiceLevelObjective.createServiceLevelObjective(req, res, next);
};

module.exports.deleteServiceLevelObjective = function deleteServiceLevelObjective (req, res, next) {
  ServiceLevelObjective.deleteServiceLevelObjective(req, res, next);
};

module.exports.listServiceLevelObjective = function listServiceLevelObjective (req, res, next) {
  ServiceLevelObjective.listServiceLevelObjective(req, res, next);
};

module.exports.patchServiceLevelObjective = function patchServiceLevelObjective (req, res, next) {
  ServiceLevelObjective.patchServiceLevelObjective(req, res, next);
};

module.exports.retrieveServiceLevelObjective = function retrieveServiceLevelObjective (req, res, next) {
  ServiceLevelObjective.retrieveServiceLevelObjective(req, res, next);
};
