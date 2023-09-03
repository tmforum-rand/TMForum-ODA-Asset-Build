'use strict';

var url = require('url');

var CheckServiceQualification = require('../service/CheckServiceQualificationService');

module.exports.createCheckServiceQualification = function createCheckServiceQualification (req, res, next) {
  CheckServiceQualification.createCheckServiceQualification(req, res, next);
};

module.exports.deleteCheckServiceQualification = function deleteCheckServiceQualification (req, res, next) {
  CheckServiceQualification.deleteCheckServiceQualification(req, res, next);
};

module.exports.listCheckServiceQualification = function listCheckServiceQualification (req, res, next) {
  CheckServiceQualification.listCheckServiceQualification(req, res, next);
};

module.exports.patchCheckServiceQualification = function patchCheckServiceQualification (req, res, next) {
  CheckServiceQualification.patchCheckServiceQualification(req, res, next);
};

module.exports.retrieveCheckServiceQualification = function retrieveCheckServiceQualification (req, res, next) {
  CheckServiceQualification.retrieveCheckServiceQualification(req, res, next);
};
