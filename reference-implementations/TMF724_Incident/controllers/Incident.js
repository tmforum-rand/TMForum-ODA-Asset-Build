'use strict';

var url = require('url');

var Incident = require('../service/IncidentService');

module.exports.createIncident = function createIncident (req, res, next) {
  Incident.createIncident(req, res, next);
};

module.exports.listIncident = function listIncident (req, res, next) {
  Incident.listIncident(req, res, next);
};

module.exports.retrieveIncident = function retrieveIncident (req, res, next) {
  Incident.retrieveIncident(req, res, next);
};
