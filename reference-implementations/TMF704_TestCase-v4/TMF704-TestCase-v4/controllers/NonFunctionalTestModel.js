'use strict';

var url = require('url');

var NonFunctionalTestModel = require('../service/NonFunctionalTestModelService');

module.exports.createNonFunctionalTestModel = function createNonFunctionalTestModel (req, res, next) {
  NonFunctionalTestModel.createNonFunctionalTestModel(req, res, next);
};

module.exports.deleteNonFunctionalTestModel = function deleteNonFunctionalTestModel (req, res, next) {
  NonFunctionalTestModel.deleteNonFunctionalTestModel(req, res, next);
};

module.exports.listNonFunctionalTestModel = function listNonFunctionalTestModel (req, res, next) {
  NonFunctionalTestModel.listNonFunctionalTestModel(req, res, next);
};

module.exports.patchNonFunctionalTestModel = function patchNonFunctionalTestModel (req, res, next) {
  NonFunctionalTestModel.patchNonFunctionalTestModel(req, res, next);
};

module.exports.retrieveNonFunctionalTestModel = function retrieveNonFunctionalTestModel (req, res, next) {
  NonFunctionalTestModel.retrieveNonFunctionalTestModel(req, res, next);
};
