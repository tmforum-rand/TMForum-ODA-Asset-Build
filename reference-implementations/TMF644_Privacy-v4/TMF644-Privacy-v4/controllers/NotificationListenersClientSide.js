'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToPartyPrivacyAgreementAttributeValueChangeEvent = function listenToPartyPrivacyAgreementAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyAgreementAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPartyPrivacyAgreementCreateEvent = function listenToPartyPrivacyAgreementCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyAgreementCreateEvent(req, res, next);
};

module.exports.listenToPartyPrivacyAgreementDeleteEvent = function listenToPartyPrivacyAgreementDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyAgreementDeleteEvent(req, res, next);
};

module.exports.listenToPartyPrivacyAgreementStatusChangeEvent = function listenToPartyPrivacyAgreementStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyAgreementStatusChangeEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileAttributeValueChangeEvent = function listenToPartyPrivacyProfileAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileCreateEvent = function listenToPartyPrivacyProfileCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileCreateEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileDeleteEvent = function listenToPartyPrivacyProfileDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileDeleteEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent = function listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileSpecificationCreateEvent = function listenToPartyPrivacyProfileSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationCreateEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileSpecificationDeleteEvent = function listenToPartyPrivacyProfileSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationDeleteEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileSpecificationStatusChangeEvent = function listenToPartyPrivacyProfileSpecificationStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileSpecificationStatusChangeEvent(req, res, next);
};

module.exports.listenToPartyPrivacyProfileStatusChangeEvent = function listenToPartyPrivacyProfileStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyPrivacyProfileStatusChangeEvent(req, res, next);
};
