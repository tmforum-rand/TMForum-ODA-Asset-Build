'use strict';

var url = require('url');

var AgreementSpecification = require('../service/AgreementSpecificationService');

module.exports.createAgreementSpecification = function createAgreementSpecification (req, res, next) {
  AgreementSpecification.createAgreementSpecification(req, res, next);
};

module.exports.deleteAgreementSpecification = function deleteAgreementSpecification (req, res, next) {
  AgreementSpecification.deleteAgreementSpecification(req, res, next);
};

module.exports.listAgreementSpecification = function listAgreementSpecification (req, res, next) {
  AgreementSpecification.listAgreementSpecification(req, res, next);
};

module.exports.patchAgreementSpecification = function patchAgreementSpecification (req, res, next) {
  AgreementSpecification.patchAgreementSpecification(req, res, next);
};

module.exports.retrieveAgreementSpecification = function retrieveAgreementSpecification (req, res, next) {
  AgreementSpecification.retrieveAgreementSpecification(req, res, next);
};
