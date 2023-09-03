'use strict';

var url = require('url');

var TestSuite = require('../service/TestSuiteService');

module.exports.createTestSuite = function createTestSuite (req, res, next) {
  TestSuite.createTestSuite(req, res, next);
};

module.exports.deleteTestSuite = function deleteTestSuite (req, res, next) {
  TestSuite.deleteTestSuite(req, res, next);
};

module.exports.listTestSuite = function listTestSuite (req, res, next) {
  TestSuite.listTestSuite(req, res, next);
};

module.exports.patchTestSuite = function patchTestSuite (req, res, next) {
  TestSuite.patchTestSuite(req, res, next);
};

module.exports.retrieveTestSuite = function retrieveTestSuite (req, res, next) {
  TestSuite.retrieveTestSuite(req, res, next);
};
