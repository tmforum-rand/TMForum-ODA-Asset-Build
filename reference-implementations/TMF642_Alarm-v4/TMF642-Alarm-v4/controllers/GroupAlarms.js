'use strict';

var url = require('url');

var GroupAlarms = require('../service/GroupAlarmsService');

module.exports.createGroupAlarms = function createGroupAlarms (req, res, next) {
  GroupAlarms.createGroupAlarms(req, res, next);
};

module.exports.listGroupAlarms = function listGroupAlarms (req, res, next) {
  GroupAlarms.listGroupAlarms(req, res, next);
};

module.exports.retrieveGroupAlarms = function retrieveGroupAlarms (req, res, next) {
  GroupAlarms.retrieveGroupAlarms(req, res, next);
};
