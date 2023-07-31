'use strict';

var url = require('url');

var ProductOfferingRiskAssessment = require('../service/ProductOfferingRiskAssessmentService');

module.exports.createProductOfferingRiskAssessment = function createProductOfferingRiskAssessment (req, res, next) {
  ProductOfferingRiskAssessment.createProductOfferingRiskAssessment(req, res, next);
};

module.exports.deleteProductOfferingRiskAssessment = function deleteProductOfferingRiskAssessment (req, res, next) {
  ProductOfferingRiskAssessment.deleteProductOfferingRiskAssessment(req, res, next);
};

module.exports.listProductOfferingRiskAssessment = function listProductOfferingRiskAssessment (req, res, next) {
  ProductOfferingRiskAssessment.listProductOfferingRiskAssessment(req, res, next);
};

module.exports.retrieveProductOfferingRiskAssessment = function retrieveProductOfferingRiskAssessment (req, res, next) {
  ProductOfferingRiskAssessment.retrieveProductOfferingRiskAssessment(req, res, next);
};
