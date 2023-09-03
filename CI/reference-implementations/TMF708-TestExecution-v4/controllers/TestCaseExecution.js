'use strict';

var url = require('url');

var TestCaseExecution = require('../service/TestCaseExecutionService');

module.exports.createTestCaseExecution = function createTestCaseExecution (req, res, next) {
  TestCaseExecution.createTestCaseExecution(req, res, next);
};

module.exports.deleteTestCaseExecution = function deleteTestCaseExecution (req, res, next) {
  TestCaseExecution.deleteTestCaseExecution(req, res, next);
};

module.exports.listTestCaseExecution = function listTestCaseExecution (req, res, next) {
  TestCaseExecution.listTestCaseExecution(req, res, next);
};

module.exports.retrieveTestCaseExecution = function retrieveTestCaseExecution (req, res, next) {
  TestCaseExecution.retrieveTestCaseExecution(req, res, next);
};
