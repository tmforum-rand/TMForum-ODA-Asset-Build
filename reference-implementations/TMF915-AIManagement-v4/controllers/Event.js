'use strict';

var url = require('url');

var Event = require('../service/EventService');

module.exports.createEvent = function createEvent (req, res, next) {
  Event.createEvent(req, res, next);
};

module.exports.listEvent = function listEvent (req, res, next) {
  Event.listEvent(req, res, next);
};

module.exports.retrieveEvent = function retrieveEvent (req, res, next) {
  Event.retrieveEvent(req, res, next);
};
