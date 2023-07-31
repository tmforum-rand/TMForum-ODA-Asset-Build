'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToUsageAttributeValueChangeEvent = function listenToUsageAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToUsageCreateEvent = function listenToUsageCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageCreateEvent(req, res, next);
};

module.exports.listenToUsageDeleteEvent = function listenToUsageDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageDeleteEvent(req, res, next);
};

module.exports.listenToUsageSpecificationAttributeValueChangeEvent = function listenToUsageSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToUsageSpecificationCreateEvent = function listenToUsageSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageSpecificationCreateEvent(req, res, next);
};

module.exports.listenToUsageSpecificationDeleteEvent = function listenToUsageSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageSpecificationDeleteEvent(req, res, next);
};

module.exports.listenToUsageStateChangeEvent = function listenToUsageStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToUsageStateChangeEvent(req, res, next);
};
