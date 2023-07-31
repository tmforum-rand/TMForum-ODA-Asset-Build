'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToDigitalIdentityAttributeValueChangeEvent = function listenToDigitalIdentityAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToDigitalIdentityAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToDigitalIdentityCreateEvent = function listenToDigitalIdentityCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToDigitalIdentityCreateEvent(req, res, next);
};

module.exports.listenToDigitalIdentityDeleteEvent = function listenToDigitalIdentityDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToDigitalIdentityDeleteEvent(req, res, next);
};

module.exports.listenToDigitalIdentityStateChangeEvent = function listenToDigitalIdentityStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToDigitalIdentityStateChangeEvent(req, res, next);
};
