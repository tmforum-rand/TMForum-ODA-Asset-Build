'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToDiagnoseIncidentCreateEvent = function listenToDiagnoseIncidentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToDiagnoseIncidentCreateEvent(req, res, next);
};

module.exports.listenToDiagnoseIncidentStateChangeEvent = function listenToDiagnoseIncidentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToDiagnoseIncidentStateChangeEvent(req, res, next);
};

module.exports.listenToIncidentCreateEvent = function listenToIncidentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentCreateEvent(req, res, next);
};

module.exports.listenToIncidentStateChangeEvent = function listenToIncidentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToIncidentStateChangeEvent(req, res, next);
};

module.exports.listenToResolveIncidentCreateEvent = function listenToResolveIncidentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToResolveIncidentCreateEvent(req, res, next);
};

module.exports.listenToResolveIncidentStateChangeEvent = function listenToResolveIncidentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToResolveIncidentStateChangeEvent(req, res, next);
};
