'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToTroubleTicketAttributeValueChangeEvent = function listenToTroubleTicketAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTroubleTicketCreateEvent = function listenToTroubleTicketCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketCreateEvent(req, res, next);
};

module.exports.listenToTroubleTicketDeleteEvent = function listenToTroubleTicketDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketDeleteEvent(req, res, next);
};

module.exports.listenToTroubleTicketInformationRequiredEvent = function listenToTroubleTicketInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketInformationRequiredEvent(req, res, next);
};

module.exports.listenToTroubleTicketResolvedEvent = function listenToTroubleTicketResolvedEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketResolvedEvent(req, res, next);
};

module.exports.listenToTroubleTicketStatusChangeEvent = function listenToTroubleTicketStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTroubleTicketStatusChangeEvent(req, res, next);
};
