'use strict';

var url = require('url');

var NonFunctionalTestResult = require('../service/NonFunctionalTestResultService');

module.exports.createNonFunctionalTestResult = function createNonFunctionalTestResult (req, res, next) {
  NonFunctionalTestResult.createNonFunctionalTestResult(req, res, next);
};

module.exports.deleteNonFunctionalTestResult = function deleteNonFunctionalTestResult (req, res, next) {
  NonFunctionalTestResult.deleteNonFunctionalTestResult(req, res, next);
};

module.exports.listNonFunctionalTestResult = function listNonFunctionalTestResult (req, res, next) {
  NonFunctionalTestResult.listNonFunctionalTestResult(req, res, next);
};

module.exports.patchNonFunctionalTestResult = function patchNonFunctionalTestResult (req, res, next) {
  NonFunctionalTestResult.patchNonFunctionalTestResult(req, res, next);
};

module.exports.retrieveNonFunctionalTestResult = function retrieveNonFunctionalTestResult (req, res, next) {
  NonFunctionalTestResult.retrieveNonFunctionalTestResult(req, res, next);
};
