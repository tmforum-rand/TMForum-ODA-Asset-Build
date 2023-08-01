'use strict';

var url = require('url');

var AiContractSpecification = require('../service/AiContractSpecificationService');

module.exports.createAiContractSpecification = function createAiContractSpecification (req, res, next) {
  AiContractSpecification.createAiContractSpecification(req, res, next);
};

module.exports.deleteAiContractSpecification = function deleteAiContractSpecification (req, res, next) {
  AiContractSpecification.deleteAiContractSpecification(req, res, next);
};

module.exports.listAiContractSpecification = function listAiContractSpecification (req, res, next) {
  AiContractSpecification.listAiContractSpecification(req, res, next);
};

module.exports.patchAiContractSpecification = function patchAiContractSpecification (req, res, next) {
  AiContractSpecification.patchAiContractSpecification(req, res, next);
};

module.exports.retrieveAiContractSpecification = function retrieveAiContractSpecification (req, res, next) {
  AiContractSpecification.retrieveAiContractSpecification(req, res, next);
};
