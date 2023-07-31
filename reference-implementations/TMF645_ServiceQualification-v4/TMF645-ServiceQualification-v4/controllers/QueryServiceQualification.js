'use strict';

var url = require('url');

var QueryServiceQualification = require('../service/QueryServiceQualificationService');

module.exports.createQueryServiceQualification = function createQueryServiceQualification (req, res, next) {
  QueryServiceQualification.createQueryServiceQualification(req, res, next);
};

module.exports.deleteQueryServiceQualification = function deleteQueryServiceQualification (req, res, next) {
  QueryServiceQualification.deleteQueryServiceQualification(req, res, next);
};

module.exports.listQueryServiceQualification = function listQueryServiceQualification (req, res, next) {
  QueryServiceQualification.listQueryServiceQualification(req, res, next);
};

module.exports.patchQueryServiceQualification = function patchQueryServiceQualification (req, res, next) {
  QueryServiceQualification.patchQueryServiceQualification(req, res, next);
};

module.exports.retrieveQueryServiceQualification = function retrieveQueryServiceQualification (req, res, next) {
  QueryServiceQualification.retrieveQueryServiceQualification(req, res, next);
};
