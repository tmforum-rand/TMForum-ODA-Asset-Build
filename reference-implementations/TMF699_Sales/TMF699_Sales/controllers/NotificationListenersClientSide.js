'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToSalesLeadAttributeValueChangeEvent = function listenToSalesLeadAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSalesLeadAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToSalesLeadCreateEvent = function listenToSalesLeadCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToSalesLeadCreateEvent(req, res, next);
};

module.exports.listenToSalesLeadDeleteEvent = function listenToSalesLeadDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToSalesLeadDeleteEvent(req, res, next);
};

module.exports.listenToSalesLeadStateChangeEvent = function listenToSalesLeadStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSalesLeadStateChangeEvent(req, res, next);
};
