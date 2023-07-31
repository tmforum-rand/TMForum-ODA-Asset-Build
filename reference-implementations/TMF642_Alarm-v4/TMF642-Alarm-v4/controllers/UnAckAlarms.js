'use strict';

var url = require('url');

var UnAckAlarms = require('../service/UnAckAlarmsService');

module.exports.createUnAckAlarms = function createUnAckAlarms (req, res, next) {
  UnAckAlarms.createUnAckAlarms(req, res, next);
};

module.exports.listUnAckAlarms = function listUnAckAlarms (req, res, next) {
  UnAckAlarms.listUnAckAlarms(req, res, next);
};

module.exports.retrieveUnAckAlarms = function retrieveUnAckAlarms (req, res, next) {
  UnAckAlarms.retrieveUnAckAlarms(req, res, next);
};
