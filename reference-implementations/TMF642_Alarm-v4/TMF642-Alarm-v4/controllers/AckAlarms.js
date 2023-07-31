'use strict';

var url = require('url');

var AckAlarms = require('../service/AckAlarmsService');

module.exports.createAckAlarms = function createAckAlarms (req, res, next) {
  AckAlarms.createAckAlarms(req, res, next);
};

module.exports.listAckAlarms = function listAckAlarms (req, res, next) {
  AckAlarms.listAckAlarms(req, res, next);
};

module.exports.retrieveAckAlarms = function retrieveAckAlarms (req, res, next) {
  AckAlarms.retrieveAckAlarms(req, res, next);
};
