'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCancelResourceOrderCreateEvent = function listenToCancelResourceOrderCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelResourceOrderCreateEvent(req, res, next);
};

module.exports.listenToCancelResourceOrderInformationRequiredEvent = function listenToCancelResourceOrderInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelResourceOrderInformationRequiredEvent(req, res, next);
};

module.exports.listenToCancelResourceOrderStateChangeEvent = function listenToCancelResourceOrderStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelResourceOrderStateChangeEvent(req, res, next);
};

module.exports.listenToResourceOrderAttributeValueChangeEvent = function listenToResourceOrderAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceOrderAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToResourceOrderCreateEvent = function listenToResourceOrderCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceOrderCreateEvent(req, res, next);
};

module.exports.listenToResourceOrderDeleteEvent = function listenToResourceOrderDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceOrderDeleteEvent(req, res, next);
};

module.exports.listenToResourceOrderInformationRequiredEvent = function listenToResourceOrderInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceOrderInformationRequiredEvent(req, res, next);
};

module.exports.listenToResourceOrderStateChangeEvent = function listenToResourceOrderStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceOrderStateChangeEvent(req, res, next);
};
