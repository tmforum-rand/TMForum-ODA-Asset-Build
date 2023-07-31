'use strict';

var url = require('url');

var DiagnoseIncident = require('../service/DiagnoseIncidentService');

module.exports.createDiagnoseIncident = function createDiagnoseIncident (req, res, next) {
  DiagnoseIncident.createDiagnoseIncident(req, res, next);
};

module.exports.listDiagnoseIncident = function listDiagnoseIncident (req, res, next) {
  DiagnoseIncident.listDiagnoseIncident(req, res, next);
};

module.exports.retrieveDiagnoseIncident = function retrieveDiagnoseIncident (req, res, next) {
  DiagnoseIncident.retrieveDiagnoseIncident(req, res, next);
};
