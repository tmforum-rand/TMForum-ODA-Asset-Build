'use strict';

var url = require('url');

var ConcreteEnvironmentMetaModel = require('../service/ConcreteEnvironmentMetaModelService');

module.exports.createConcreteEnvironmentMetaModel = function createConcreteEnvironmentMetaModel (req, res, next) {
  ConcreteEnvironmentMetaModel.createConcreteEnvironmentMetaModel(req, res, next);
};

module.exports.deleteConcreteEnvironmentMetaModel = function deleteConcreteEnvironmentMetaModel (req, res, next) {
  ConcreteEnvironmentMetaModel.deleteConcreteEnvironmentMetaModel(req, res, next);
};

module.exports.listConcreteEnvironmentMetaModel = function listConcreteEnvironmentMetaModel (req, res, next) {
  ConcreteEnvironmentMetaModel.listConcreteEnvironmentMetaModel(req, res, next);
};

module.exports.patchConcreteEnvironmentMetaModel = function patchConcreteEnvironmentMetaModel (req, res, next) {
  ConcreteEnvironmentMetaModel.patchConcreteEnvironmentMetaModel(req, res, next);
};

module.exports.retrieveConcreteEnvironmentMetaModel = function retrieveConcreteEnvironmentMetaModel (req, res, next) {
  ConcreteEnvironmentMetaModel.retrieveConcreteEnvironmentMetaModel(req, res, next);
};
