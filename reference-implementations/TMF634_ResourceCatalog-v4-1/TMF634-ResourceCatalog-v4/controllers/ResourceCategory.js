'use strict';

var url = require('url');

var ResourceCategory = require('../service/ResourceCategoryService');

module.exports.createResourceCategory = function createResourceCategory (req, res, next) {
  ResourceCategory.createResourceCategory(req, res, next);
};

module.exports.deleteResourceCategory = function deleteResourceCategory (req, res, next) {
  ResourceCategory.deleteResourceCategory(req, res, next);
};

module.exports.listResourceCategory = function listResourceCategory (req, res, next) {
  ResourceCategory.listResourceCategory(req, res, next);
};

module.exports.patchResourceCategory = function patchResourceCategory (req, res, next) {
  ResourceCategory.patchResourceCategory(req, res, next);
};

module.exports.retrieveResourceCategory = function retrieveResourceCategory (req, res, next) {
  ResourceCategory.retrieveResourceCategory(req, res, next);
};
