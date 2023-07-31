'use strict';

var url = require('url');

var AiModelSpecification = require('../service/AiModelSpecificationService');

module.exports.createAiModelSpecification = function createAiModelSpecification (req, res, next) {
  AiModelSpecification.createAiModelSpecification(req, res, next);
};

module.exports.deleteAiModelSpecification = function deleteAiModelSpecification (req, res, next) {
  AiModelSpecification.deleteAiModelSpecification(req, res, next);
};

module.exports.listAiModelSpecification = function listAiModelSpecification (req, res, next) {
  AiModelSpecification.listAiModelSpecification(req, res, next);
};

module.exports.patchAiModelSpecification = function patchAiModelSpecification (req, res, next) {
  AiModelSpecification.patchAiModelSpecification(req, res, next);
};

module.exports.retrieveAiModelSpecification = function retrieveAiModelSpecification (req, res, next) {
  AiModelSpecification.retrieveAiModelSpecification(req, res, next);
};
