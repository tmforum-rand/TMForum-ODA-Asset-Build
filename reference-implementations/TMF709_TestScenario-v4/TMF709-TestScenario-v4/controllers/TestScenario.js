'use strict';

var url = require('url');

var TestScenario = require('../service/TestScenarioService');

module.exports.createTestScenario = function createTestScenario (req, res, next) {
  TestScenario.createTestScenario(req, res, next);
};

module.exports.deleteTestScenario = function deleteTestScenario (req, res, next) {
  TestScenario.deleteTestScenario(req, res, next);
};

module.exports.listTestScenario = function listTestScenario (req, res, next) {
  TestScenario.listTestScenario(req, res, next);
};

module.exports.patchTestScenario = function patchTestScenario (req, res, next) {
  TestScenario.patchTestScenario(req, res, next);
};

module.exports.retrieveTestScenario = function retrieveTestScenario (req, res, next) {
  TestScenario.retrieveTestScenario(req, res, next);
};
