'use strict';

var url = require('url');

var EntitySpecification = require('../service/EntitySpecificationService');

module.exports.createEntitySpecification = function createEntitySpecification (req, res, next) {
  EntitySpecification.createEntitySpecification(req, res, next);
};

module.exports.deleteEntitySpecification = function deleteEntitySpecification (req, res, next) {
  EntitySpecification.deleteEntitySpecification(req, res, next);
};

module.exports.listEntitySpecification = function listEntitySpecification (req, res, next) {
  EntitySpecification.listEntitySpecification(req, res, next);
};

module.exports.patchEntitySpecification = function patchEntitySpecification (req, res, next) {
  EntitySpecification.patchEntitySpecification(req, res, next);
};

module.exports.retrieveEntitySpecification = function retrieveEntitySpecification (req, res, next) {
  EntitySpecification.retrieveEntitySpecification(req, res, next);
};
