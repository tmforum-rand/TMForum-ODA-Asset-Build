'use strict';

var url = require('url');

var Agreement = require('../service/AgreementService');

module.exports.createAgreement = function createAgreement (req, res, next) {
  Agreement.createAgreement(req, res, next);
};

module.exports.deleteAgreement = function deleteAgreement (req, res, next) {
  Agreement.deleteAgreement(req, res, next);
};

module.exports.listAgreement = function listAgreement (req, res, next) {
  Agreement.listAgreement(req, res, next);
};

module.exports.patchAgreement = function patchAgreement (req, res, next) {
  Agreement.patchAgreement(req, res, next);
};

module.exports.retrieveAgreement = function retrieveAgreement (req, res, next) {
  Agreement.retrieveAgreement(req, res, next);
};
