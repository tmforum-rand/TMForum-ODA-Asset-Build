'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToChangeRequestApprovalRequiredEvent = function listenToChangeRequestApprovalRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToChangeRequestApprovalRequiredEvent(req, res, next);
};

module.exports.listenToChangeRequestAttributeValueChangeEvent = function listenToChangeRequestAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToChangeRequestAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToChangeRequestCreateEvent = function listenToChangeRequestCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToChangeRequestCreateEvent(req, res, next);
};

module.exports.listenToChangeRequestDeleteEvent = function listenToChangeRequestDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToChangeRequestDeleteEvent(req, res, next);
};

module.exports.listenToChangeRequestStatusChangeEvent = function listenToChangeRequestStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToChangeRequestStatusChangeEvent(req, res, next);
};
