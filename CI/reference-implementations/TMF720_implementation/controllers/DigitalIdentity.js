'use strict';

var url = require('url');

var DigitalIdentity = require('../service/DigitalIdentityService');

module.exports.createDigitalIdentity = function createDigitalIdentity (req, res, next) {
  DigitalIdentity.createDigitalIdentity(req, res, next);
};

module.exports.deleteDigitalIdentity = function deleteDigitalIdentity (req, res, next) {
  DigitalIdentity.deleteDigitalIdentity(req, res, next);
};

module.exports.listDigitalIdentity = function listDigitalIdentity (req, res, next) {
  DigitalIdentity.listDigitalIdentity(req, res, next);
};

module.exports.patchDigitalIdentity = function patchDigitalIdentity (req, res, next) {
  DigitalIdentity.patchDigitalIdentity(req, res, next);
};

module.exports.retrieveDigitalIdentity = function retrieveDigitalIdentity (req, res, next) {
  DigitalIdentity.retrieveDigitalIdentity(req, res, next);
};
