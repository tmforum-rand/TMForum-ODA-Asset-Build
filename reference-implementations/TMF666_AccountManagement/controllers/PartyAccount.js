'use strict';

var url = require('url');

var PartyAccount = require('../service/PartyAccountService');

module.exports.createPartyAccount = function createPartyAccount (req, res, next) {
  PartyAccount.createPartyAccount(req, res, next);
};

module.exports.deletePartyAccount = function deletePartyAccount (req, res, next) {
  PartyAccount.deletePartyAccount(req, res, next);
};

module.exports.listPartyAccount = function listPartyAccount (req, res, next) {
  PartyAccount.listPartyAccount(req, res, next);
};

module.exports.patchPartyAccount = function patchPartyAccount (req, res, next) {
  PartyAccount.patchPartyAccount(req, res, next);
};

module.exports.retrievePartyAccount = function retrievePartyAccount (req, res, next) {
  PartyAccount.retrievePartyAccount(req, res, next);
};
