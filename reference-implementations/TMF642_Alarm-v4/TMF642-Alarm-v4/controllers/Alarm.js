'use strict';

var url = require('url');

var Alarm = require('../service/AlarmService');

module.exports.createAlarm = function createAlarm (req, res, next) {
  Alarm.createAlarm(req, res, next);
};

module.exports.deleteAlarm = function deleteAlarm (req, res, next) {
  Alarm.deleteAlarm(req, res, next);
};

module.exports.listAlarm = function listAlarm (req, res, next) {
  Alarm.listAlarm(req, res, next);
};

module.exports.patchAlarm = function patchAlarm (req, res, next) {
  Alarm.patchAlarm(req, res, next);
};

module.exports.retrieveAlarm = function retrieveAlarm (req, res, next) {
  Alarm.retrieveAlarm(req, res, next);
};
