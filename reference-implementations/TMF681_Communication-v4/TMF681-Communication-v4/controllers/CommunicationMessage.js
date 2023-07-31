'use strict';

var url = require('url');

var CommunicationMessage = require('../service/CommunicationMessageService');

module.exports.createCommunicationMessage = function createCommunicationMessage (req, res, next) {
  CommunicationMessage.createCommunicationMessage(req, res, next);
};

module.exports.deleteCommunicationMessage = function deleteCommunicationMessage (req, res, next) {
  CommunicationMessage.deleteCommunicationMessage(req, res, next);
};

module.exports.listCommunicationMessage = function listCommunicationMessage (req, res, next) {
  CommunicationMessage.listCommunicationMessage(req, res, next);
};

module.exports.patchCommunicationMessage = function patchCommunicationMessage (req, res, next) {
  CommunicationMessage.patchCommunicationMessage(req, res, next);
};

module.exports.retrieveCommunicationMessage = function retrieveCommunicationMessage (req, res, next) {
  CommunicationMessage.retrieveCommunicationMessage(req, res, next);
};
