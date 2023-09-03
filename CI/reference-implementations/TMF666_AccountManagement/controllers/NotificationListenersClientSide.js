'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToBillingAccountAttributeValueChangeEvent = function listenToBillingAccountAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToBillingAccountAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToBillingAccountStateChangeEvent = function listenToBillingAccountStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToBillingAccountStateChangeEvent(req, res, next);
};

module.exports.listenToFinancialAccountAttributeValueChangeEvent = function listenToFinancialAccountAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToFinancialAccountAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToFinancialAccountCreateEvent = function listenToFinancialAccountCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToFinancialAccountCreateEvent(req, res, next);
};

module.exports.listenToFinancialAccountDeleteEvent = function listenToFinancialAccountDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToFinancialAccountDeleteEvent(req, res, next);
};

module.exports.listenToFinancialAccountStateChangeEvent = function listenToFinancialAccountStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToFinancialAccountStateChangeEvent(req, res, next);
};

module.exports.listenToPartyAccountAttributeValueChangeEvent = function listenToPartyAccountAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyAccountAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPartyAccountStateChangeEvent = function listenToPartyAccountStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyAccountStateChangeEvent(req, res, next);
};

module.exports.listenToSettlementAccountAttributeValueChangeEvent = function listenToSettlementAccountAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSettlementAccountAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToSettlementAccountStateChangeEvent = function listenToSettlementAccountStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSettlementAccountStateChangeEvent(req, res, next);
};
