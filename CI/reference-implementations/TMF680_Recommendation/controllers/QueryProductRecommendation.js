'use strict';

var url = require('url');

var QueryProductRecommendation = require('../service/QueryProductRecommendationService');

module.exports.createQueryProductRecommendation = function createQueryProductRecommendation (req, res, next) {
  QueryProductRecommendation.createQueryProductRecommendation(req, res, next);
};

module.exports.listQueryProductRecommendation = function listQueryProductRecommendation (req, res, next) {
  QueryProductRecommendation.listQueryProductRecommendation(req, res, next);
};

module.exports.retrieveQueryProductRecommendation = function retrieveQueryProductRecommendation (req, res, next) {
  QueryProductRecommendation.retrieveQueryProductRecommendation(req, res, next);
};
