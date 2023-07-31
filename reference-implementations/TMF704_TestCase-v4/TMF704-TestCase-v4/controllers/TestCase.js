'use strict';

var url = require('url');

var TestCase = require('../service/TestCaseService');

module.exports.createTestCase = function createTestCase (req, res, next) {
  TestCase.createTestCase(req, res, next);
};

module.exports.deleteTestCase = function deleteTestCase (req, res, next) {
  TestCase.deleteTestCase(req, res, next);
};

module.exports.listTestCase = function listTestCase (req, res, next) {
  TestCase.listTestCase(req, res, next);
};

module.exports.patchTestCase = function patchTestCase (req, res, next) {
  TestCase.patchTestCase(req, res, next);
};

module.exports.retrieveTestCase = function retrieveTestCase (req, res, next) {
  TestCase.retrieveTestCase(req, res, next);
};
