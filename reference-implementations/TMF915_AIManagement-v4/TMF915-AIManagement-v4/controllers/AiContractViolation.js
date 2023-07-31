'use strict';

var url = require('url');

var AiContractViolation = require('../service/AiContractViolationService');

module.exports.createAiContractViolation = function createAiContractViolation (req, res, next) {
  AiContractViolation.createAiContractViolation(req, res, next);
};

module.exports.listAiContractViolation = function listAiContractViolation (req, res, next) {
  AiContractViolation.listAiContractViolation(req, res, next);
};

module.exports.retrieveAiContractViolation = function retrieveAiContractViolation (req, res, next) {
  AiContractViolation.retrieveAiContractViolation(req, res, next);
};
