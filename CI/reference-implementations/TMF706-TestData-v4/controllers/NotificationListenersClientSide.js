'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToTestDataInstanceAttributeValueChangeEvent = function listenToTestDataInstanceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataInstanceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestDataInstanceChangeEvent = function listenToTestDataInstanceChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataInstanceChangeEvent(req, res, next);
};

module.exports.listenToTestDataInstanceCreateEvent = function listenToTestDataInstanceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataInstanceCreateEvent(req, res, next);
};

module.exports.listenToTestDataInstanceDeleteEvent = function listenToTestDataInstanceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataInstanceDeleteEvent(req, res, next);
};

module.exports.listenToTestDataInstanceStateChangeEvent = function listenToTestDataInstanceStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataInstanceStateChangeEvent(req, res, next);
};

module.exports.listenToTestDataSchemaAttributeValueChangeEvent = function listenToTestDataSchemaAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataSchemaAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestDataSchemaChangeEvent = function listenToTestDataSchemaChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataSchemaChangeEvent(req, res, next);
};

module.exports.listenToTestDataSchemaCreateEvent = function listenToTestDataSchemaCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataSchemaCreateEvent(req, res, next);
};

module.exports.listenToTestDataSchemaDeleteEvent = function listenToTestDataSchemaDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataSchemaDeleteEvent(req, res, next);
};

module.exports.listenToTestDataSchemaStateChangeEvent = function listenToTestDataSchemaStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestDataSchemaStateChangeEvent(req, res, next);
};
