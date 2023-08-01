'use strict';

var url = require('url');

var EntityCatalog = require('../service/EntityCatalogService');

module.exports.createEntityCatalog = function createEntityCatalog (req, res, next) {
  EntityCatalog.createEntityCatalog(req, res, next);
};

module.exports.deleteEntityCatalog = function deleteEntityCatalog (req, res, next) {
  EntityCatalog.deleteEntityCatalog(req, res, next);
};

module.exports.listEntityCatalog = function listEntityCatalog (req, res, next) {
  EntityCatalog.listEntityCatalog(req, res, next);
};

module.exports.patchEntityCatalog = function patchEntityCatalog (req, res, next) {
  EntityCatalog.patchEntityCatalog(req, res, next);
};

module.exports.retrieveEntityCatalog = function retrieveEntityCatalog (req, res, next) {
  EntityCatalog.retrieveEntityCatalog(req, res, next);
};
