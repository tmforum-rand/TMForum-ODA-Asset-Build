'use strict';

var url = require('url');

var PartyInteraction = require('../service/PartyInteractionService');

module.exports.createPartyInteraction = function createPartyInteraction (req, res, next) {
  PartyInteraction.createPartyInteraction(req, res, next);
};

module.exports.deletePartyInteraction = function deletePartyInteraction (req, res, next) {
  PartyInteraction.deletePartyInteraction(req, res, next);
};

module.exports.listPartyInteraction = function listPartyInteraction (req, res, next) {
  PartyInteraction.listPartyInteraction(req, res, next);
};

module.exports.patchPartyInteraction = function patchPartyInteraction (req, res, next) {
  PartyInteraction.patchPartyInteraction(req, res, next);
};

module.exports.retrievePartyInteraction = function retrievePartyInteraction (req, res, next) {
  PartyInteraction.retrievePartyInteraction(req, res, next);
};
