'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCommunicationMessageAttributeValueChangeEvent = function listenToCommunicationMessageAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCommunicationMessageAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToCommunicationMessageStateChangeEvent = function listenToCommunicationMessageStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCommunicationMessageStateChangeEvent(req, res, next);
};
