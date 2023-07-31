'use strict';

var url = require('url');

var TroubleTicket = require('../service/TroubleTicketService');

module.exports.createTroubleTicket = function createTroubleTicket (req, res, next) {
  TroubleTicket.createTroubleTicket(req, res, next);
};

module.exports.deleteTroubleTicket = function deleteTroubleTicket (req, res, next) {
  TroubleTicket.deleteTroubleTicket(req, res, next);
};

module.exports.listTroubleTicket = function listTroubleTicket (req, res, next) {
  TroubleTicket.listTroubleTicket(req, res, next);
};

module.exports.patchTroubleTicket = function patchTroubleTicket (req, res, next) {
  TroubleTicket.patchTroubleTicket(req, res, next);
};

module.exports.retrieveTroubleTicket = function retrieveTroubleTicket (req, res, next) {
  TroubleTicket.retrieveTroubleTicket(req, res, next);
};
