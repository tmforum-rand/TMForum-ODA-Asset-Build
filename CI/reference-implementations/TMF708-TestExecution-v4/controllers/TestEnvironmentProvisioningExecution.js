'use strict';

var url = require('url');

var TestEnvironmentProvisioningExecution = require('../service/TestEnvironmentProvisioningExecutionService');

module.exports.createTestEnvironmentProvisioningExecution = function createTestEnvironmentProvisioningExecution (req, res, next) {
  TestEnvironmentProvisioningExecution.createTestEnvironmentProvisioningExecution(req, res, next);
};

module.exports.deleteTestEnvironmentProvisioningExecution = function deleteTestEnvironmentProvisioningExecution (req, res, next) {
  TestEnvironmentProvisioningExecution.deleteTestEnvironmentProvisioningExecution(req, res, next);
};

module.exports.listTestEnvironmentProvisioningExecution = function listTestEnvironmentProvisioningExecution (req, res, next) {
  TestEnvironmentProvisioningExecution.listTestEnvironmentProvisioningExecution(req, res, next);
};

module.exports.retrieveTestEnvironmentProvisioningExecution = function retrieveTestEnvironmentProvisioningExecution (req, res, next) {
  TestEnvironmentProvisioningExecution.retrieveTestEnvironmentProvisioningExecution(req, res, next);
};
