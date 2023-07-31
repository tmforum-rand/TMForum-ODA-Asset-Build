'use strict';

var url = require('url');

var ResourceSpecification = require('../service/ResourceSpecificationService');

module.exports.createResourceSpecification = function createResourceSpecification (req, res, next) {
  ResourceSpecification.createResourceSpecification(req, res, next);
};

module.exports.deleteResourceSpecification = function deleteResourceSpecification (req, res, next) {
  ResourceSpecification.deleteResourceSpecification(req, res, next);
};

module.exports.listResourceSpecification = function listResourceSpecification (req, res, next) {
  ResourceSpecification.listResourceSpecification(req, res, next);
};

module.exports.patchResourceSpecification = function patchResourceSpecification (req, res, next) {
  ResourceSpecification.patchResourceSpecification(req, res, next);
};

module.exports.retrieveResourceSpecification = function retrieveResourceSpecification (req, res, next) {
  ResourceSpecification.retrieveResourceSpecification(req, res, next);
};
