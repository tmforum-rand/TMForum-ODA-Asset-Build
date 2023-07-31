'use strict';

var url = require('url');

var ResolveIncident = require('../service/ResolveIncidentService');

module.exports.createResolveIncident = function createResolveIncident (req, res, next) {
  ResolveIncident.createResolveIncident(req, res, next);
};

module.exports.listResolveIncident = function listResolveIncident (req, res, next) {
  ResolveIncident.listResolveIncident(req, res, next);
};

module.exports.retrieveResolveIncident = function retrieveResolveIncident (req, res, next) {
  ResolveIncident.retrieveResolveIncident(req, res, next);
};
