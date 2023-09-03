'use strict';

var url = require('url');

var ResourceCatalog = require('../service/ResourceCatalogService');

module.exports.createResourceCatalog = function createResourceCatalog (req, res, next) {
  ResourceCatalog.createResourceCatalog(req, res, next);
};

module.exports.deleteResourceCatalog = function deleteResourceCatalog (req, res, next) {
  ResourceCatalog.deleteResourceCatalog(req, res, next);
};

module.exports.listResourceCatalog = function listResourceCatalog (req, res, next) {
  ResourceCatalog.listResourceCatalog(req, res, next);
};

module.exports.patchResourceCatalog = function patchResourceCatalog (req, res, next) {
  ResourceCatalog.patchResourceCatalog(req, res, next);
};

module.exports.retrieveResourceCatalog = function retrieveResourceCatalog (req, res, next) {
  ResourceCatalog.retrieveResourceCatalog(req, res, next);
};
