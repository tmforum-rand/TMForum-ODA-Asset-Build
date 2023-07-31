'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToProductOfferingQualificationAttributeValueChangeEvent = function listenToProductOfferingQualificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToProductOfferingQualificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToProductOfferingQualificationCreateEvent = function listenToProductOfferingQualificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToProductOfferingQualificationCreateEvent(req, res, next);
};

module.exports.listenToProductOfferingQualificationDeleteEvent = function listenToProductOfferingQualificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToProductOfferingQualificationDeleteEvent(req, res, next);
};

module.exports.listenToProductOfferingQualificationInformationRequiredEvent = function listenToProductOfferingQualificationInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToProductOfferingQualificationInformationRequiredEvent(req, res, next);
};

module.exports.listenToProductOfferingQualificationStateChangeEvent = function listenToProductOfferingQualificationStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToProductOfferingQualificationStateChangeEvent(req, res, next);
};
