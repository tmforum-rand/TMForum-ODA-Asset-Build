'use strict';

var url = require('url');

var PartyRoleRiskAssessment = require('../service/PartyRoleRiskAssessmentService');

module.exports.createPartyRoleRiskAssessment = function createPartyRoleRiskAssessment (req, res, next) {
  PartyRoleRiskAssessment.createPartyRoleRiskAssessment(req, res, next);
};

module.exports.deletePartyRoleRiskAssessment = function deletePartyRoleRiskAssessment (req, res, next) {
  PartyRoleRiskAssessment.deletePartyRoleRiskAssessment(req, res, next);
};

module.exports.listPartyRoleRiskAssessment = function listPartyRoleRiskAssessment (req, res, next) {
  PartyRoleRiskAssessment.listPartyRoleRiskAssessment(req, res, next);
};

module.exports.retrievePartyRoleRiskAssessment = function retrievePartyRoleRiskAssessment (req, res, next) {
  PartyRoleRiskAssessment.retrievePartyRoleRiskAssessment(req, res, next);
};
