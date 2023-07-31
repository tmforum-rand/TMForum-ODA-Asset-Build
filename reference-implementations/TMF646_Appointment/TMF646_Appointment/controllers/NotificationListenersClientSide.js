'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAppointmentAttributeValueChangeEvent = function listenToAppointmentAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAppointmentAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAppointmentCreateEvent = function listenToAppointmentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAppointmentCreateEvent(req, res, next);
};

module.exports.listenToAppointmentDeleteEvent = function listenToAppointmentDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAppointmentDeleteEvent(req, res, next);
};

module.exports.listenToAppointmentStateChangeEvent = function listenToAppointmentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAppointmentStateChangeEvent(req, res, next);
};

module.exports.listenToSearchTimeSlotAttributeValueChangeEvent = function listenToSearchTimeSlotAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSearchTimeSlotAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToSearchTimeSlotCreateEvent = function listenToSearchTimeSlotCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToSearchTimeSlotCreateEvent(req, res, next);
};

module.exports.listenToSearchTimeSlotDeleteEvent = function listenToSearchTimeSlotDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToSearchTimeSlotDeleteEvent(req, res, next);
};

module.exports.listenToSearchTimeSlotStateChangeEvent = function listenToSearchTimeSlotStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToSearchTimeSlotStateChangeEvent(req, res, next);
};
