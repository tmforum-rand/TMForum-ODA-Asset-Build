'use strict';

var url = require('url');

var TestDataSchema = require('../service/TestDataSchemaService');

module.exports.createTestDataSchema = function createTestDataSchema (req, res, next) {
  TestDataSchema.createTestDataSchema(req, res, next);
};

module.exports.deleteTestDataSchema = function deleteTestDataSchema (req, res, next) {
  TestDataSchema.deleteTestDataSchema(req, res, next);
};

module.exports.listTestDataSchema = function listTestDataSchema (req, res, next) {
  TestDataSchema.listTestDataSchema(req, res, next);
};

module.exports.patchTestDataSchema = function patchTestDataSchema (req, res, next) {
  TestDataSchema.patchTestDataSchema(req, res, next);
};

module.exports.retrieveTestDataSchema = function retrieveTestDataSchema (req, res, next) {
  TestDataSchema.retrieveTestDataSchema(req, res, next);
};
