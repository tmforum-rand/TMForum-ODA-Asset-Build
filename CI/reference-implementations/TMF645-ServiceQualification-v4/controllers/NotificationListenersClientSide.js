'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToCheckServiceQualificationAttributeValueChangeEvent = function listenToCheckServiceQualificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCheckServiceQualificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToCheckServiceQualificationCreateEvent = function listenToCheckServiceQualificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToCheckServiceQualificationCreateEvent(req, res, next);
};

module.exports.listenToCheckServiceQualificationDeleteEvent = function listenToCheckServiceQualificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToCheckServiceQualificationDeleteEvent(req, res, next);
};

module.exports.listenToCheckServiceQualificationInformationRequiredEvent = function listenToCheckServiceQualificationInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToCheckServiceQualificationInformationRequiredEvent(req, res, next);
};

module.exports.listenToCheckServiceQualificationStateChangeEvent = function listenToCheckServiceQualificationStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCheckServiceQualificationStateChangeEvent(req, res, next);
};

module.exports.listenToQueryServiceQualificationCreateEvent = function listenToQueryServiceQualificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryServiceQualificationCreateEvent(req, res, next);
};

module.exports.listenToQueryServiceQualificationDeleteEvent = function listenToQueryServiceQualificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryServiceQualificationDeleteEvent(req, res, next);
};

module.exports.listenToQueryServiceQualificationStateChangeEvent = function listenToQueryServiceQualificationStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryServiceQualificationStateChangeEvent(req, res, next);
};
