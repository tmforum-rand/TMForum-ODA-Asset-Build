'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAckAlarmsCreateEvent = function listenToAckAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAckAlarmsCreateEvent(req, res, next);
};

module.exports.listenToAckAlarmsStateChangeEvent = function listenToAckAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAckAlarmsStateChangeEvent(req, res, next);
};

module.exports.listenToAlarmAttributeValueChangeEvent = function listenToAlarmAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAlarmCreateEvent = function listenToAlarmCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmCreateEvent(req, res, next);
};

module.exports.listenToAlarmDeleteEvent = function listenToAlarmDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmDeleteEvent(req, res, next);
};

module.exports.listenToAlarmStateChangeEvent = function listenToAlarmStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmStateChangeEvent(req, res, next);
};

module.exports.listenToClearAlarmsCreateEvent = function listenToClearAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToClearAlarmsCreateEvent(req, res, next);
};

module.exports.listenToClearAlarmsStateChangeEvent = function listenToClearAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToClearAlarmsStateChangeEvent(req, res, next);
};

module.exports.listenToCommentAlarmsCreateEvent = function listenToCommentAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToCommentAlarmsCreateEvent(req, res, next);
};

module.exports.listenToCommentAlarmsStateChangeEvent = function listenToCommentAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToCommentAlarmsStateChangeEvent(req, res, next);
};

module.exports.listenToGroupAlarmsCreateEvent = function listenToGroupAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToGroupAlarmsCreateEvent(req, res, next);
};

module.exports.listenToGroupAlarmsStateChangeEvent = function listenToGroupAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGroupAlarmsStateChangeEvent(req, res, next);
};

module.exports.listenToUnAckAlarmsCreateEvent = function listenToUnAckAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToUnAckAlarmsCreateEvent(req, res, next);
};

module.exports.listenToUnAckAlarmsStateChangeEvent = function listenToUnAckAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToUnAckAlarmsStateChangeEvent(req, res, next);
};

module.exports.listenToUnGroupAlarmsCreateEvent = function listenToUnGroupAlarmsCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToUnGroupAlarmsCreateEvent(req, res, next);
};

module.exports.listenToUnGroupAlarmsStateChangeEvent = function listenToUnGroupAlarmsStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToUnGroupAlarmsStateChangeEvent(req, res, next);
};
