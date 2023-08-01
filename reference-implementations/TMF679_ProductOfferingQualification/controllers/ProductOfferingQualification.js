'use strict';

var url = require('url');

var ProductOfferingQualification = require('../service/ProductOfferingQualificationService');

module.exports.createProductOfferingQualification = function createProductOfferingQualification (req, res, next) {
  ProductOfferingQualification.createProductOfferingQualification(req, res, next);
};

module.exports.deleteProductOfferingQualification = function deleteProductOfferingQualification (req, res, next) {
  ProductOfferingQualification.deleteProductOfferingQualification(req, res, next);
};

module.exports.listProductOfferingQualification = function listProductOfferingQualification (req, res, next) {
  ProductOfferingQualification.listProductOfferingQualification(req, res, next);
};

module.exports.patchProductOfferingQualification = function patchProductOfferingQualification (req, res, next) {
  ProductOfferingQualification.patchProductOfferingQualification(req, res, next);
};

module.exports.retrieveProductOfferingQualification = function retrieveProductOfferingQualification (req, res, next) {
  ProductOfferingQualification.retrieveProductOfferingQualification(req, res, next);
};
