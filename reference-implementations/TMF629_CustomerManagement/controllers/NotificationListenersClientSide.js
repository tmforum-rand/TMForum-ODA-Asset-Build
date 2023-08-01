'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCustomerAttributeValueChangeEvent = function listenToCustomerAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCustomerAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToCustomerCreateEvent = function listenToCustomerCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToCustomerCreateEvent(req, res, next);
};

module.exports.listenToCustomerDeleteEvent = function listenToCustomerDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToCustomerDeleteEvent(req, res, next);
};

module.exports.listenToCustomerStateChangeEvent = function listenToCustomerStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCustomerStateChangeEvent(req, res, next);
};
