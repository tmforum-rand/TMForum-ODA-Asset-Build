'use strict';

var url = require('url');

var Association = require('../service/AssociationService');

module.exports.createAssociation = function createAssociation (req, res, next) {
  Association.createAssociation(req, res, next);
};

module.exports.deleteAssociation = function deleteAssociation (req, res, next) {
  Association.deleteAssociation(req, res, next);
};

module.exports.listAssociation = function listAssociation (req, res, next) {
  Association.listAssociation(req, res, next);
};

module.exports.patchAssociation = function patchAssociation (req, res, next) {
  Association.patchAssociation(req, res, next);
};

module.exports.retrieveAssociation = function retrieveAssociation (req, res, next) {
  Association.retrieveAssociation(req, res, next);
};
