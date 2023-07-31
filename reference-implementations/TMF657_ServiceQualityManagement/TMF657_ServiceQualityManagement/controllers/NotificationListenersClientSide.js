'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceLevelObjectiveAttributeValueChangeEvent = function listenToServiceLevelObjectiveAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelObjectiveAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToServiceLevelObjectiveCreateEvent = function listenToServiceLevelObjectiveCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelObjectiveCreateEvent(req, res, next);
};

module.exports.listenToServiceLevelObjectiveDeleteEvent = function listenToServiceLevelObjectiveDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelObjectiveDeleteEvent(req, res, next);
};

module.exports.listenToServiceLevelSpecificationAttributeValueChangeEvent = function listenToServiceLevelSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToServiceLevelSpecificationCreateEvent = function listenToServiceLevelSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelSpecificationCreateEvent(req, res, next);
};

module.exports.listenToServiceLevelSpecificationDeleteEvent = function listenToServiceLevelSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceLevelSpecificationDeleteEvent(req, res, next);
};
