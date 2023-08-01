'use strict';

var url = require('url');

var TestCaseResult = require('../service/TestCaseResultService');

module.exports.createTestCaseResult = function createTestCaseResult (req, res, next) {
  TestCaseResult.createTestCaseResult(req, res, next);
};

module.exports.deleteTestCaseResult = function deleteTestCaseResult (req, res, next) {
  TestCaseResult.deleteTestCaseResult(req, res, next);
};

module.exports.listTestCaseResult = function listTestCaseResult (req, res, next) {
  TestCaseResult.listTestCaseResult(req, res, next);
};

module.exports.patchTestCaseResult = function patchTestCaseResult (req, res, next) {
  TestCaseResult.patchTestCaseResult(req, res, next);
};

module.exports.retrieveTestCaseResult = function retrieveTestCaseResult (req, res, next) {
  TestCaseResult.retrieveTestCaseResult(req, res, next);
};
