'use strict';

var url = require('url');

var ShoppingCartRiskAssessment = require('../service/ShoppingCartRiskAssessmentService');

module.exports.createShoppingCartRiskAssessment = function createShoppingCartRiskAssessment (req, res, next) {
  ShoppingCartRiskAssessment.createShoppingCartRiskAssessment(req, res, next);
};

module.exports.deleteShoppingCartRiskAssessment = function deleteShoppingCartRiskAssessment (req, res, next) {
  ShoppingCartRiskAssessment.deleteShoppingCartRiskAssessment(req, res, next);
};

module.exports.listShoppingCartRiskAssessment = function listShoppingCartRiskAssessment (req, res, next) {
  ShoppingCartRiskAssessment.listShoppingCartRiskAssessment(req, res, next);
};

module.exports.retrieveShoppingCartRiskAssessment = function retrieveShoppingCartRiskAssessment (req, res, next) {
  ShoppingCartRiskAssessment.retrieveShoppingCartRiskAssessment(req, res, next);
};
