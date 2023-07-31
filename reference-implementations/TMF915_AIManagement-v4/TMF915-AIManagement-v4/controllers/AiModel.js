'use strict';

var url = require('url');

var AiModel = require('../service/AiModelService');

module.exports.createAiModel = function createAiModel (req, res, next) {
  AiModel.createAiModel(req, res, next);
};

module.exports.deleteAiModel = function deleteAiModel (req, res, next) {
  AiModel.deleteAiModel(req, res, next);
};

module.exports.listAiModel = function listAiModel (req, res, next) {
  AiModel.listAiModel(req, res, next);
};

module.exports.patchAiModel = function patchAiModel (req, res, next) {
  AiModel.patchAiModel(req, res, next);
};

module.exports.retrieveAiModel = function retrieveAiModel (req, res, next) {
  AiModel.retrieveAiModel(req, res, next);
};
