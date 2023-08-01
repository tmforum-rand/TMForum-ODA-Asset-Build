'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToQuoteAttributeValueChangeEvent = function listenToQuoteAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToQuoteAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToQuoteCreateEvent = function listenToQuoteCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToQuoteCreateEvent(req, res, next);
};

module.exports.listenToQuoteDeleteEvent = function listenToQuoteDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToQuoteDeleteEvent(req, res, next);
};

module.exports.listenToQuoteInformationRequiredEvent = function listenToQuoteInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToQuoteInformationRequiredEvent(req, res, next);
};

module.exports.listenToQuoteStateChangeEvent = function listenToQuoteStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToQuoteStateChangeEvent(req, res, next);
};
