'use strict';

var url = require('url');

var TestEnvironmentAllocationExecution = require('../service/TestEnvironmentAllocationExecutionService');

module.exports.createTestEnvironmentAllocationExecution = function createTestEnvironmentAllocationExecution (req, res, next) {
  TestEnvironmentAllocationExecution.createTestEnvironmentAllocationExecution(req, res, next);
};

module.exports.deleteTestEnvironmentAllocationExecution = function deleteTestEnvironmentAllocationExecution (req, res, next) {
  TestEnvironmentAllocationExecution.deleteTestEnvironmentAllocationExecution(req, res, next);
};

module.exports.listTestEnvironmentAllocationExecution = function listTestEnvironmentAllocationExecution (req, res, next) {
  TestEnvironmentAllocationExecution.listTestEnvironmentAllocationExecution(req, res, next);
};

module.exports.retrieveTestEnvironmentAllocationExecution = function retrieveTestEnvironmentAllocationExecution (req, res, next) {
  TestEnvironmentAllocationExecution.retrieveTestEnvironmentAllocationExecution(req, res, next);
};
