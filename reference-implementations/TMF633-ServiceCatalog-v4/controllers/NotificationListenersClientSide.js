'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceCandidateChangeEvent = function listenToServiceCandidateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateChangeEvent(req, res, next);
};

module.exports.listenToServiceCandidateCreateEvent = function listenToServiceCandidateCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateCreateEvent(req, res, next);
};

module.exports.listenToServiceCandidateDeleteEvent = function listenToServiceCandidateDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCandidateDeleteEvent(req, res, next);
};

module.exports.listenToServiceCatalogBatchEvent = function listenToServiceCatalogBatchEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogBatchEvent(req, res, next);
};

module.exports.listenToServiceCatalogChangeEvent = function listenToServiceCatalogChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogChangeEvent(req, res, next);
};

module.exports.listenToServiceCatalogCreateEvent = function listenToServiceCatalogCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogCreateEvent(req, res, next);
};

module.exports.listenToServiceCatalogDeleteEvent = function listenToServiceCatalogDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCatalogDeleteEvent(req, res, next);
};

module.exports.listenToServiceCategoryChangeEvent = function listenToServiceCategoryChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryChangeEvent(req, res, next);
};

module.exports.listenToServiceCategoryCreateEvent = function listenToServiceCategoryCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryCreateEvent(req, res, next);
};

module.exports.listenToServiceCategoryDeleteEvent = function listenToServiceCategoryDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceCategoryDeleteEvent(req, res, next);
};

module.exports.listenToServiceSpecificationChangeEvent = function listenToServiceSpecificationChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationChangeEvent(req, res, next);
};

module.exports.listenToServiceSpecificationCreateEvent = function listenToServiceSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationCreateEvent(req, res, next);
};

module.exports.listenToServiceSpecificationDeleteEvent = function listenToServiceSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceSpecificationDeleteEvent(req, res, next);
};
