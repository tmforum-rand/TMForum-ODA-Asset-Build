'use strict';

var url = require('url');

var SalesLead = require('../service/SalesLeadService');

module.exports.createSalesLead = function createSalesLead (req, res, next) {
  SalesLead.createSalesLead(req, res, next);
};

module.exports.deleteSalesLead = function deleteSalesLead (req, res, next) {
  SalesLead.deleteSalesLead(req, res, next);
};

module.exports.listSalesLead = function listSalesLead (req, res, next) {
  SalesLead.listSalesLead(req, res, next);
};

module.exports.patchSalesLead = function patchSalesLead (req, res, next) {
  SalesLead.patchSalesLead(req, res, next);
};

module.exports.retrieveSalesLead = function retrieveSalesLead (req, res, next) {
  SalesLead.retrieveSalesLead(req, res, next);
};
