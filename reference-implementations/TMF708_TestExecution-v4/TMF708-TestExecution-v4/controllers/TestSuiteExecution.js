'use strict';

var url = require('url');

var TestSuiteExecution = require('../service/TestSuiteExecutionService');

module.exports.createTestSuiteExecution = function createTestSuiteExecution (req, res, next) {
  TestSuiteExecution.createTestSuiteExecution(req, res, next);
};

module.exports.deleteTestSuiteExecution = function deleteTestSuiteExecution (req, res, next) {
  TestSuiteExecution.deleteTestSuiteExecution(req, res, next);
};

module.exports.listTestSuiteExecution = function listTestSuiteExecution (req, res, next) {
  TestSuiteExecution.listTestSuiteExecution(req, res, next);
};

module.exports.retrieveTestSuiteExecution = function retrieveTestSuiteExecution (req, res, next) {
  TestSuiteExecution.retrieveTestSuiteExecution(req, res, next);
};
