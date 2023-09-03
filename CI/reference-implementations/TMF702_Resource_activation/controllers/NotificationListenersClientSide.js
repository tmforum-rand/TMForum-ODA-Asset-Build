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

module.exports.listenToResourceAttributeValueChangeEvent = function listenToResourceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToResourceCreateEvent = function listenToResourceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCreateEvent(req, res, next);
};

module.exports.listenToResourceDeleteEvent = function listenToResourceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceDeleteEvent(req, res, next);
};

module.exports.listenToResourceStateChangeEvent = function listenToResourceStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceStateChangeEvent(req, res, next);
};
