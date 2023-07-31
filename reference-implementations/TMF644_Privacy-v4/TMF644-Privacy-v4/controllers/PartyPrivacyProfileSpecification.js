'use strict';

var url = require('url');

var PartyPrivacyProfileSpecification = require('../service/PartyPrivacyProfileSpecificationService');

module.exports.createPartyPrivacyProfileSpecification = function createPartyPrivacyProfileSpecification (req, res, next) {
  PartyPrivacyProfileSpecification.createPartyPrivacyProfileSpecification(req, res, next);
};

module.exports.deletePartyPrivacyProfileSpecification = function deletePartyPrivacyProfileSpecification (req, res, next) {
  PartyPrivacyProfileSpecification.deletePartyPrivacyProfileSpecification(req, res, next);
};

module.exports.listPartyPrivacyProfileSpecification = function listPartyPrivacyProfileSpecification (req, res, next) {
  PartyPrivacyProfileSpecification.listPartyPrivacyProfileSpecification(req, res, next);
};

module.exports.patchPartyPrivacyProfileSpecification = function patchPartyPrivacyProfileSpecification (req, res, next) {
  PartyPrivacyProfileSpecification.patchPartyPrivacyProfileSpecification(req, res, next);
};

module.exports.retrievePartyPrivacyProfileSpecification = function retrievePartyPrivacyProfileSpecification (req, res, next) {
  PartyPrivacyProfileSpecification.retrievePartyPrivacyProfileSpecification(req, res, next);
};
