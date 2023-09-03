'use strict';

var url = require('url');

var UnGroupAlarms = require('../service/UnGroupAlarmsService');

module.exports.createUnGroupAlarms = function createUnGroupAlarms (req, res, next) {
  UnGroupAlarms.createUnGroupAlarms(req, res, next);
};

module.exports.listUnGroupAlarms = function listUnGroupAlarms (req, res, next) {
  UnGroupAlarms.listUnGroupAlarms(req, res, next);
};

module.exports.retrieveUnGroupAlarms = function retrieveUnGroupAlarms (req, res, next) {
  UnGroupAlarms.retrieveUnGroupAlarms(req, res, next);
};
