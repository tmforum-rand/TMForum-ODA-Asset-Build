'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToPaymentAttributeValueChangeEvent = function listenToPaymentAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPaymentCreateEvent = function listenToPaymentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentCreateEvent(req, res, next);
};

module.exports.listenToPaymentDeleteEvent = function listenToPaymentDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentDeleteEvent(req, res, next);
};

module.exports.listenToPaymentStateChangeEvent = function listenToPaymentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentStateChangeEvent(req, res, next);
};

module.exports.listenToRefundAttributeValueChangeEvent = function listenToRefundAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToRefundAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToRefundCreateEvent = function listenToRefundCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToRefundCreateEvent(req, res, next);
};

module.exports.listenToRefundDeleteEvent = function listenToRefundDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToRefundDeleteEvent(req, res, next);
};

module.exports.listenToRefundStateChangeEvent = function listenToRefundStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToRefundStateChangeEvent(req, res, next);
};
