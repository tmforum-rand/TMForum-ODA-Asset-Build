'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToPartyInteractionAttributeValueChangeEvent = function listenToPartyInteractionAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyInteractionAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToPartyInteractionCreateEvent = function listenToPartyInteractionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyInteractionCreateEvent(req, res, next);
};

module.exports.listenToPartyInteractionDeleteEvent = function listenToPartyInteractionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyInteractionDeleteEvent(req, res, next);
};

module.exports.listenToPartyInteractionStatusChangeEvent = function listenToPartyInteractionStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToPartyInteractionStatusChangeEvent(req, res, next);
};
