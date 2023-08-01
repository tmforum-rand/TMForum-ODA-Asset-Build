'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceAttributeValueChangeEvent = function listenToServiceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToServiceCreateEvent = function listenToServiceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCreateEvent(req, res, next);
};

module.exports.listenToServiceDeleteEvent = function listenToServiceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceDeleteEvent(req, res, next);
};

module.exports.listenToServiceStateChangeEvent = function listenToServiceStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceStateChangeEvent(req, res, next);
};
