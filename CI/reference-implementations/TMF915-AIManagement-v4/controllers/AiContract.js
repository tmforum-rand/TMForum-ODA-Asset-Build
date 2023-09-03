'use strict';

var url = require('url');

var AiContract = require('../service/AiContractService');

module.exports.createAiContract = function createAiContract (req, res, next) {
  AiContract.createAiContract(req, res, next);
};

module.exports.deleteAiContract = function deleteAiContract (req, res, next) {
  AiContract.deleteAiContract(req, res, next);
};

module.exports.listAiContract = function listAiContract (req, res, next) {
  AiContract.listAiContract(req, res, next);
};

module.exports.patchAiContract = function patchAiContract (req, res, next) {
  AiContract.patchAiContract(req, res, next);
};

module.exports.retrieveAiContract = function retrieveAiContract (req, res, next) {
  AiContract.retrieveAiContract(req, res, next);
};
