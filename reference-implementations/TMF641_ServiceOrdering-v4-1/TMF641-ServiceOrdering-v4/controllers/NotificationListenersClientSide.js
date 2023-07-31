'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCancelServiceOrderCreateEvent = function listenToCancelServiceOrderCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelServiceOrderCreateEvent(req, res, next);
};

module.exports.listenToCancelServiceOrderInformationRequiredEvent = function listenToCancelServiceOrderInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelServiceOrderInformationRequiredEvent(req, res, next);
};

module.exports.listenToCancelServiceOrderStateChangeEvent = function listenToCancelServiceOrderStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCancelServiceOrderStateChangeEvent(req, res, next);
};

module.exports.listenToServiceOrderAttributeValueChangeEvent = function listenToServiceOrderAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToServiceOrderCreateEvent = function listenToServiceOrderCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderCreateEvent(req, res, next);
};

module.exports.listenToServiceOrderDeleteEvent = function listenToServiceOrderDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderDeleteEvent(req, res, next);
};

module.exports.listenToServiceOrderInformationRequiredEvent = function listenToServiceOrderInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderInformationRequiredEvent(req, res, next);
};

module.exports.listenToServiceOrderJeopardyEvent = function listenToServiceOrderJeopardyEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderJeopardyEvent(req, res, next);
};

module.exports.listenToServiceOrderMilestoneEvent = function listenToServiceOrderMilestoneEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderMilestoneEvent(req, res, next);
};

module.exports.listenToServiceOrderStateChangeEvent = function listenToServiceOrderStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderStateChangeEvent(req, res, next);
};
