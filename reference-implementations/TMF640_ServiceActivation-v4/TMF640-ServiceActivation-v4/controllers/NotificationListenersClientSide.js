'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToMonitorAttributeValueChangeEvent = function listenToMonitorAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToMonitorCreateEvent = function listenToMonitorCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorCreateEvent(req, res, next);
};

module.exports.listenToMonitorDeleteEvent = function listenToMonitorDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorDeleteEvent(req, res, next);
};

module.exports.listenToMonitorStateChangeEvent = function listenToMonitorStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorStateChangeEvent(req, res, next);
};

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
