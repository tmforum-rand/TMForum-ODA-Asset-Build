'use strict';

var url = require('url');

var EntityCategory = require('../service/EntityCategoryService');

module.exports.createEntityCategory = function createEntityCategory (req, res, next) {
  EntityCategory.createEntityCategory(req, res, next);
};

module.exports.deleteEntityCategory = function deleteEntityCategory (req, res, next) {
  EntityCategory.deleteEntityCategory(req, res, next);
};

module.exports.listEntityCategory = function listEntityCategory (req, res, next) {
  EntityCategory.listEntityCategory(req, res, next);
};

module.exports.patchEntityCategory = function patchEntityCategory (req, res, next) {
  EntityCategory.patchEntityCategory(req, res, next);
};

module.exports.retrieveEntityCategory = function retrieveEntityCategory (req, res, next) {
  EntityCategory.retrieveEntityCategory(req, res, next);
};
