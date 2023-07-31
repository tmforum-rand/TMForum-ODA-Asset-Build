'use strict';

var url = require('url');

var ClearAlarms = require('../service/ClearAlarmsService');

module.exports.createClearAlarms = function createClearAlarms (req, res, next) {
  ClearAlarms.createClearAlarms(req, res, next);
};

module.exports.listClearAlarms = function listClearAlarms (req, res, next) {
  ClearAlarms.listClearAlarms(req, res, next);
};

module.exports.retrieveClearAlarms = function retrieveClearAlarms (req, res, next) {
  ClearAlarms.retrieveClearAlarms(req, res, next);
};
