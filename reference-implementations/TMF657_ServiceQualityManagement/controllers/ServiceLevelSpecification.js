'use strict';

var url = require('url');

var ServiceLevelSpecification = require('../service/ServiceLevelSpecificationService');

module.exports.createServiceLevelSpecification = function createServiceLevelSpecification (req, res, next) {
  ServiceLevelSpecification.createServiceLevelSpecification(req, res, next);
};

module.exports.deleteServiceLevelSpecification = function deleteServiceLevelSpecification (req, res, next) {
  ServiceLevelSpecification.deleteServiceLevelSpecification(req, res, next);
};

module.exports.listServiceLevelSpecification = function listServiceLevelSpecification (req, res, next) {
  ServiceLevelSpecification.listServiceLevelSpecification(req, res, next);
};

module.exports.patchServiceLevelSpecification = function patchServiceLevelSpecification (req, res, next) {
  ServiceLevelSpecification.patchServiceLevelSpecification(req, res, next);
};

module.exports.retrieveServiceLevelSpecification = function retrieveServiceLevelSpecification (req, res, next) {
  ServiceLevelSpecification.retrieveServiceLevelSpecification(req, res, next);
};
