'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToPaymentMethodAttributeValueChangeEvent = function listenToPaymentMethodAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentMethodAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPaymentMethodCreateEvent = function listenToPaymentMethodCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentMethodCreateEvent(req, res, next);
};

module.exports.listenToPaymentMethodDeleteEvent = function listenToPaymentMethodDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentMethodDeleteEvent(req, res, next);
};

module.exports.listenToPaymentMethodStatusChangeEvent = function listenToPaymentMethodStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPaymentMethodStatusChangeEvent(req, res, next);
};
