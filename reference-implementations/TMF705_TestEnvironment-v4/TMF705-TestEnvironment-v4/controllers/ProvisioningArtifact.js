'use strict';

var url = require('url');

var ProvisioningArtifact = require('../service/ProvisioningArtifactService');

module.exports.createProvisioningArtifact = function createProvisioningArtifact (req, res, next) {
  ProvisioningArtifact.createProvisioningArtifact(req, res, next);
};

module.exports.deleteProvisioningArtifact = function deleteProvisioningArtifact (req, res, next) {
  ProvisioningArtifact.deleteProvisioningArtifact(req, res, next);
};

module.exports.listProvisioningArtifact = function listProvisioningArtifact (req, res, next) {
  ProvisioningArtifact.listProvisioningArtifact(req, res, next);
};

module.exports.patchProvisioningArtifact = function patchProvisioningArtifact (req, res, next) {
  ProvisioningArtifact.patchProvisioningArtifact(req, res, next);
};

module.exports.retrieveProvisioningArtifact = function retrieveProvisioningArtifact (req, res, next) {
  ProvisioningArtifact.retrieveProvisioningArtifact(req, res, next);
};
