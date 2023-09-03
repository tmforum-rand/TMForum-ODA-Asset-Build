'use strict';

var url = require('url');

var TestResourceAPI = require('../service/TestResourceAPIService');

module.exports.createTestResourceAPI = function createTestResourceAPI (req, res, next) {
  TestResourceAPI.createTestResourceAPI(req, res, next);
};

module.exports.deleteTestResourceAPI = function deleteTestResourceAPI (req, res, next) {
  TestResourceAPI.deleteTestResourceAPI(req, res, next);
};

module.exports.listTestResourceAPI = function listTestResourceAPI (req, res, next) {
  TestResourceAPI.listTestResourceAPI(req, res, next);
};

module.exports.patchTestResourceAPI = function patchTestResourceAPI (req, res, next) {
  TestResourceAPI.patchTestResourceAPI(req, res, next);
};

module.exports.retrieveTestResourceAPI = function retrieveTestResourceAPI (req, res, next) {
  TestResourceAPI.retrieveTestResourceAPI(req, res, next);
};
