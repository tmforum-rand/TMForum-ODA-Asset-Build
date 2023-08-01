'use strict';

var url = require('url');

var AssociationSpecification = require('../service/AssociationSpecificationService');

module.exports.createAssociationSpecification = function createAssociationSpecification (req, res, next) {
  AssociationSpecification.createAssociationSpecification(req, res, next);
};

module.exports.deleteAssociationSpecification = function deleteAssociationSpecification (req, res, next) {
  AssociationSpecification.deleteAssociationSpecification(req, res, next);
};

module.exports.listAssociationSpecification = function listAssociationSpecification (req, res, next) {
  AssociationSpecification.listAssociationSpecification(req, res, next);
};

module.exports.patchAssociationSpecification = function patchAssociationSpecification (req, res, next) {
  AssociationSpecification.patchAssociationSpecification(req, res, next);
};

module.exports.retrieveAssociationSpecification = function retrieveAssociationSpecification (req, res, next) {
  AssociationSpecification.retrieveAssociationSpecification(req, res, next);
};
