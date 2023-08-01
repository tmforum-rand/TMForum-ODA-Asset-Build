'use strict';

var url = require('url');

var EntityCatalogItem = require('../service/EntityCatalogItemService');

module.exports.createEntityCatalogItem = function createEntityCatalogItem (req, res, next) {
  EntityCatalogItem.createEntityCatalogItem(req, res, next);
};

module.exports.deleteEntityCatalogItem = function deleteEntityCatalogItem (req, res, next) {
  EntityCatalogItem.deleteEntityCatalogItem(req, res, next);
};

module.exports.listEntityCatalogItem = function listEntityCatalogItem (req, res, next) {
  EntityCatalogItem.listEntityCatalogItem(req, res, next);
};

module.exports.patchEntityCatalogItem = function patchEntityCatalogItem (req, res, next) {
  EntityCatalogItem.patchEntityCatalogItem(req, res, next);
};

module.exports.retrieveEntityCatalogItem = function retrieveEntityCatalogItem (req, res, next) {
  EntityCatalogItem.retrieveEntityCatalogItem(req, res, next);
};
