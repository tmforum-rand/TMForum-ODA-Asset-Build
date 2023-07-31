'use strict';

var url = require('url');

var GeographicSite = require('../service/GeographicSiteService');

module.exports.createGeographicSite = function createGeographicSite (req, res, next) {
  GeographicSite.createGeographicSite(req, res, next);
};

module.exports.deleteGeographicSite = function deleteGeographicSite (req, res, next) {
  GeographicSite.deleteGeographicSite(req, res, next);
};

module.exports.listGeographicSite = function listGeographicSite (req, res, next) {
  GeographicSite.listGeographicSite(req, res, next);
};

module.exports.patchGeographicSite = function patchGeographicSite (req, res, next) {
  GeographicSite.patchGeographicSite(req, res, next);
};

module.exports.retrieveGeographicSite = function retrieveGeographicSite (req, res, next) {
  GeographicSite.retrieveGeographicSite(req, res, next);
};
