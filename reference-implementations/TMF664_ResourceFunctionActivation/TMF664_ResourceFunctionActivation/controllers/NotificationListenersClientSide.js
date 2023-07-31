'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToHealAttributeValueChangeEvent = function listenToHealAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToHealAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToHealCreateEvent = function listenToHealCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToHealCreateEvent(req, res, next);
};

module.exports.listenToHealDeleteEvent = function listenToHealDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToHealDeleteEvent(req, res, next);
};

module.exports.listenToHealStateChangeEvent = function listenToHealStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToHealStateChangeEvent(req, res, next);
};

module.exports.listenToMigrateAttributeValueChangeEvent = function listenToMigrateAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMigrateAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToMigrateCreateEvent = function listenToMigrateCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToMigrateCreateEvent(req, res, next);
};

module.exports.listenToMigrateDeleteEvent = function listenToMigrateDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToMigrateDeleteEvent(req, res, next);
};

module.exports.listenToMigrateStateChangeEvent = function listenToMigrateStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMigrateStateChangeEvent(req, res, next);
};

module.exports.listenToMonitorAttributeValueChangeEvent = function listenToMonitorAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToMonitorCreateEvent = function listenToMonitorCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorCreateEvent(req, res, next);
};

module.exports.listenToMonitorDeleteEvent = function listenToMonitorDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorDeleteEvent(req, res, next);
};

module.exports.listenToMonitorStateChangeEvent = function listenToMonitorStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorStateChangeEvent(req, res, next);
};

module.exports.listenToResourceFunctionAttributeValueChangeEvent = function listenToResourceFunctionAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceFunctionAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToResourceFunctionCreateEvent = function listenToResourceFunctionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceFunctionCreateEvent(req, res, next);
};

module.exports.listenToResourceFunctionDeleteEvent = function listenToResourceFunctionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceFunctionDeleteEvent(req, res, next);
};

module.exports.listenToResourceFunctionStateChangeEvent = function listenToResourceFunctionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceFunctionStateChangeEvent(req, res, next);
};

module.exports.listenToScaleAttributeValueChangeEvent = function listenToScaleAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToScaleAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToScaleCreateEvent = function listenToScaleCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToScaleCreateEvent(req, res, next);
};

module.exports.listenToScaleDeleteEvent = function listenToScaleDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToScaleDeleteEvent(req, res, next);
};

module.exports.listenToScaleStateChangeEvent = function listenToScaleStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToScaleStateChangeEvent(req, res, next);
};
