'use strict';

var url = require('url');

var GeneralTestArtifact = require('../service/GeneralTestArtifactService');

module.exports.createGeneralTestArtifact = function createGeneralTestArtifact (req, res, next) {
  GeneralTestArtifact.createGeneralTestArtifact(req, res, next);
};

module.exports.deleteGeneralTestArtifact = function deleteGeneralTestArtifact (req, res, next) {
  GeneralTestArtifact.deleteGeneralTestArtifact(req, res, next);
};

module.exports.listGeneralTestArtifact = function listGeneralTestArtifact (req, res, next) {
  GeneralTestArtifact.listGeneralTestArtifact(req, res, next);
};

module.exports.patchGeneralTestArtifact = function patchGeneralTestArtifact (req, res, next) {
  GeneralTestArtifact.patchGeneralTestArtifact(req, res, next);
};

module.exports.retrieveGeneralTestArtifact = function retrieveGeneralTestArtifact (req, res, next) {
  GeneralTestArtifact.retrieveGeneralTestArtifact(req, res, next);
};
