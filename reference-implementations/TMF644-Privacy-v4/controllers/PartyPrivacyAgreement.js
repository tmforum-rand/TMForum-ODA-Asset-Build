'use strict';

var url = require('url');

var PartyPrivacyAgreement = require('../service/PartyPrivacyAgreementService');

module.exports.createPartyPrivacyAgreement = function createPartyPrivacyAgreement (req, res, next) {
  PartyPrivacyAgreement.createPartyPrivacyAgreement(req, res, next);
};

module.exports.deletePartyPrivacyAgreement = function deletePartyPrivacyAgreement (req, res, next) {
  PartyPrivacyAgreement.deletePartyPrivacyAgreement(req, res, next);
};

module.exports.listPartyPrivacyAgreement = function listPartyPrivacyAgreement (req, res, next) {
  PartyPrivacyAgreement.listPartyPrivacyAgreement(req, res, next);
};

module.exports.patchPartyPrivacyAgreement = function patchPartyPrivacyAgreement (req, res, next) {
  PartyPrivacyAgreement.patchPartyPrivacyAgreement(req, res, next);
};

module.exports.retrievePartyPrivacyAgreement = function retrievePartyPrivacyAgreement (req, res, next) {
  PartyPrivacyAgreement.retrievePartyPrivacyAgreement(req, res, next);
};
