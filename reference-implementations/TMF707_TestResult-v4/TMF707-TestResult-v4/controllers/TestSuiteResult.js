'use strict';

var url = require('url');

var TestSuiteResult = require('../service/TestSuiteResultService');

module.exports.createTestSuiteResult = function createTestSuiteResult (req, res, next) {
  TestSuiteResult.createTestSuiteResult(req, res, next);
};

module.exports.deleteTestSuiteResult = function deleteTestSuiteResult (req, res, next) {
  TestSuiteResult.deleteTestSuiteResult(req, res, next);
};

module.exports.listTestSuiteResult = function listTestSuiteResult (req, res, next) {
  TestSuiteResult.listTestSuiteResult(req, res, next);
};

module.exports.patchTestSuiteResult = function patchTestSuiteResult (req, res, next) {
  TestSuiteResult.patchTestSuiteResult(req, res, next);
};

module.exports.retrieveTestSuiteResult = function retrieveTestSuiteResult (req, res, next) {
  TestSuiteResult.retrieveTestSuiteResult(req, res, next);
};
