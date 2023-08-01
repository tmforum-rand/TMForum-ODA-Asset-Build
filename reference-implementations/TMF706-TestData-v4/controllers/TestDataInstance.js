'use strict';

var url = require('url');

var TestDataInstance = require('../service/TestDataInstanceService');

module.exports.createTestDataInstance = function createTestDataInstance (req, res, next) {
  TestDataInstance.createTestDataInstance(req, res, next);
};

module.exports.deleteTestDataInstance = function deleteTestDataInstance (req, res, next) {
  TestDataInstance.deleteTestDataInstance(req, res, next);
};

module.exports.listTestDataInstance = function listTestDataInstance (req, res, next) {
  TestDataInstance.listTestDataInstance(req, res, next);
};

module.exports.patchTestDataInstance = function patchTestDataInstance (req, res, next) {
  TestDataInstance.patchTestDataInstance(req, res, next);
};

module.exports.retrieveTestDataInstance = function retrieveTestDataInstance (req, res, next) {
  TestDataInstance.retrieveTestDataInstance(req, res, next);
};
