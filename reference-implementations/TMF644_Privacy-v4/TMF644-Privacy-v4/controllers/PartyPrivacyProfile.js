'use strict';

var url = require('url');

var PartyPrivacyProfile = require('../service/PartyPrivacyProfileService');

module.exports.createPartyPrivacyProfile = function createPartyPrivacyProfile (req, res, next) {
  PartyPrivacyProfile.createPartyPrivacyProfile(req, res, next);
};

module.exports.deletePartyPrivacyProfile = function deletePartyPrivacyProfile (req, res, next) {
  PartyPrivacyProfile.deletePartyPrivacyProfile(req, res, next);
};

module.exports.listPartyPrivacyProfile = function listPartyPrivacyProfile (req, res, next) {
  PartyPrivacyProfile.listPartyPrivacyProfile(req, res, next);
};

module.exports.patchPartyPrivacyProfile = function patchPartyPrivacyProfile (req, res, next) {
  PartyPrivacyProfile.patchPartyPrivacyProfile(req, res, next);
};

module.exports.retrievePartyPrivacyProfile = function retrievePartyPrivacyProfile (req, res, next) {
  PartyPrivacyProfile.retrievePartyPrivacyProfile(req, res, next);
};
