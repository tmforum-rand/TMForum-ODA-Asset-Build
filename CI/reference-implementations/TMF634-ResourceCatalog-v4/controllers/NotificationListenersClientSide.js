'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToExportJobCreateEvent = function listenToExportJobCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToExportJobCreateEvent(req, res, next);
};

module.exports.listenToExportJobStateChangeEvent = function listenToExportJobStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToExportJobStateChangeEvent(req, res, next);
};

module.exports.listenToImportJobCreateEvent = function listenToImportJobCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToImportJobCreateEvent(req, res, next);
};

module.exports.listenToImportJobStateChangeEvent = function listenToImportJobStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToImportJobStateChangeEvent(req, res, next);
};

module.exports.listenToResourceCandidateChangeEvent = function listenToResourceCandidateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCandidateChangeEvent(req, res, next);
};

module.exports.listenToResourceCandidateCreateEvent = function listenToResourceCandidateCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCandidateCreateEvent(req, res, next);
};

module.exports.listenToResourceCandidateDeleteEvent = function listenToResourceCandidateDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCandidateDeleteEvent(req, res, next);
};

module.exports.listenToResourceCatalogChangeEvent = function listenToResourceCatalogChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCatalogChangeEvent(req, res, next);
};

module.exports.listenToResourceCatalogCreateEvent = function listenToResourceCatalogCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCatalogCreateEvent(req, res, next);
};

module.exports.listenToResourceCatalogDeleteEvent = function listenToResourceCatalogDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCatalogDeleteEvent(req, res, next);
};

module.exports.listenToResourceCategoryChangeEvent = function listenToResourceCategoryChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCategoryChangeEvent(req, res, next);
};

module.exports.listenToResourceCategoryCreateEvent = function listenToResourceCategoryCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCategoryCreateEvent(req, res, next);
};

module.exports.listenToResourceCategoryDeleteEvent = function listenToResourceCategoryDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceCategoryDeleteEvent(req, res, next);
};

module.exports.listenToResourceSpecificationChangeEvent = function listenToResourceSpecificationChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceSpecificationChangeEvent(req, res, next);
};

module.exports.listenToResourceSpecificationCreateEvent = function listenToResourceSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceSpecificationCreateEvent(req, res, next);
};

module.exports.listenToResourceSpecificationDeleteEvent = function listenToResourceSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToResourceSpecificationDeleteEvent(req, res, next);
};
