'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAgreementAttributeValueChangeEvent = function listenToAgreementAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAgreementCreateEvent = function listenToAgreementCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementCreateEvent(req, res, next);
};

module.exports.listenToAgreementDeleteEvent = function listenToAgreementDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementDeleteEvent(req, res, next);
};

module.exports.listenToAgreementSpecificationAttributeValueChangeEvent = function listenToAgreementSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAgreementSpecificationCreateEvent = function listenToAgreementSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementSpecificationCreateEvent(req, res, next);
};

module.exports.listenToAgreementSpecificationDeleteEvent = function listenToAgreementSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementSpecificationDeleteEvent(req, res, next);
};

module.exports.listenToAgreementSpecificationStateChangeEvent = function listenToAgreementSpecificationStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementSpecificationStateChangeEvent(req, res, next);
};

module.exports.listenToAgreementStateChangeEvent = function listenToAgreementStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAgreementStateChangeEvent(req, res, next);
};
