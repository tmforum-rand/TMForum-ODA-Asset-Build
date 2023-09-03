'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToDocumentBatchEvent = function listenToDocumentBatchEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentBatchEvent(req, res, next);
};

module.exports.listenToDocumentChangeEvent = function listenToDocumentChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentChangeEvent(req, res, next);
};

module.exports.listenToDocumentCreateEvent = function listenToDocumentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentCreateEvent(req, res, next);
};

module.exports.listenToDocumentDeleteEvent = function listenToDocumentDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentDeleteEvent(req, res, next);
};

module.exports.listenToDocumentSpecificationAttributeValueChangeEvent = function listenToDocumentSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToDocumentSpecificationCreateEvent = function listenToDocumentSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentSpecificationCreateEvent(req, res, next);
};

module.exports.listenToDocumentSpecificationDeleteEvent = function listenToDocumentSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToDocumentSpecificationDeleteEvent(req, res, next);
};
