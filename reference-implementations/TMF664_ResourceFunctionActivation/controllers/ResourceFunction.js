'use strict';

var url = require('url');

var ResourceFunction = require('../service/ResourceFunctionService');

module.exports.createResourceFunction = function createResourceFunction (req, res, next) {
  ResourceFunction.createResourceFunction(req, res, next);
};

module.exports.deleteResourceFunction = function deleteResourceFunction (req, res, next) {
  ResourceFunction.deleteResourceFunction(req, res, next);
};

module.exports.listResourceFunction = function listResourceFunction (req, res, next) {
  ResourceFunction.listResourceFunction(req, res, next);
};

module.exports.patchResourceFunction = function patchResourceFunction (req, res, next) {
  ResourceFunction.patchResourceFunction(req, res, next);
};

module.exports.retrieveResourceFunction = function retrieveResourceFunction (req, res, next) {
  ResourceFunction.retrieveResourceFunction(req, res, next);
};
