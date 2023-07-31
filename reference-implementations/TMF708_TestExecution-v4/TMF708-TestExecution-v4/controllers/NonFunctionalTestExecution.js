'use strict';

var url = require('url');

var NonFunctionalTestExecution = require('../service/NonFunctionalTestExecutionService');

module.exports.createNonFunctionalTestExecution = function createNonFunctionalTestExecution (req, res, next) {
  NonFunctionalTestExecution.createNonFunctionalTestExecution(req, res, next);
};

module.exports.deleteNonFunctionalTestExecution = function deleteNonFunctionalTestExecution (req, res, next) {
  NonFunctionalTestExecution.deleteNonFunctionalTestExecution(req, res, next);
};

module.exports.listNonFunctionalTestExecution = function listNonFunctionalTestExecution (req, res, next) {
  NonFunctionalTestExecution.listNonFunctionalTestExecution(req, res, next);
};

module.exports.retrieveNonFunctionalTestExecution = function retrieveNonFunctionalTestExecution (req, res, next) {
  NonFunctionalTestExecution.retrieveNonFunctionalTestExecution(req, res, next);
};
