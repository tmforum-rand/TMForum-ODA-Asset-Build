'use strict';

var url = require('url');

var ProductOrderRiskAssessment = require('../service/ProductOrderRiskAssessmentService');

module.exports.createProductOrderRiskAssessment = function createProductOrderRiskAssessment (req, res, next) {
  ProductOrderRiskAssessment.createProductOrderRiskAssessment(req, res, next);
};

module.exports.deleteProductOrderRiskAssessment = function deleteProductOrderRiskAssessment (req, res, next) {
  ProductOrderRiskAssessment.deleteProductOrderRiskAssessment(req, res, next);
};

module.exports.listProductOrderRiskAssessment = function listProductOrderRiskAssessment (req, res, next) {
  ProductOrderRiskAssessment.listProductOrderRiskAssessment(req, res, next);
};

module.exports.retrieveProductOrderRiskAssessment = function retrieveProductOrderRiskAssessment (req, res, next) {
  ProductOrderRiskAssessment.retrieveProductOrderRiskAssessment(req, res, next);
};
