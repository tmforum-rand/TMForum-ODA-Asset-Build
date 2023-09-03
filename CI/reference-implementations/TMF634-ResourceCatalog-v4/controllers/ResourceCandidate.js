'use strict';

var url = require('url');

var ResourceCandidate = require('../service/ResourceCandidateService');

module.exports.createResourceCandidate = function createResourceCandidate (req, res, next) {
  ResourceCandidate.createResourceCandidate(req, res, next);
};

module.exports.deleteResourceCandidate = function deleteResourceCandidate (req, res, next) {
  ResourceCandidate.deleteResourceCandidate(req, res, next);
};

module.exports.listResourceCandidate = function listResourceCandidate (req, res, next) {
  ResourceCandidate.listResourceCandidate(req, res, next);
};

module.exports.patchResourceCandidate = function patchResourceCandidate (req, res, next) {
  ResourceCandidate.patchResourceCandidate(req, res, next);
};

module.exports.retrieveResourceCandidate = function retrieveResourceCandidate (req, res, next) {
  ResourceCandidate.retrieveResourceCandidate(req, res, next);
};
