'use strict';

var url = require('url');

var ChangeRequest = require('../service/ChangeRequestService');

module.exports.createChangeRequest = function createChangeRequest (req, res, next) {
  ChangeRequest.createChangeRequest(req, res, next);
};

module.exports.deleteChangeRequest = function deleteChangeRequest (req, res, next) {
  ChangeRequest.deleteChangeRequest(req, res, next);
};

module.exports.listChangeRequest = function listChangeRequest (req, res, next) {
  ChangeRequest.listChangeRequest(req, res, next);
};

module.exports.patchChangeRequest = function patchChangeRequest (req, res, next) {
  ChangeRequest.patchChangeRequest(req, res, next);
};

module.exports.retrieveChangeRequest = function retrieveChangeRequest (req, res, next) {
  ChangeRequest.retrieveChangeRequest(req, res, next);
};
