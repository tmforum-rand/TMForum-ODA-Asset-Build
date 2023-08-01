'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToGeneralTestArtifactAttributeValueChangeEvent = function listenToGeneralTestArtifactAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeneralTestArtifactAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToGeneralTestArtifactChangeEvent = function listenToGeneralTestArtifactChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeneralTestArtifactChangeEvent(req, res, next);
};

module.exports.listenToGeneralTestArtifactCreateEvent = function listenToGeneralTestArtifactCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeneralTestArtifactCreateEvent(req, res, next);
};

module.exports.listenToGeneralTestArtifactDeleteEvent = function listenToGeneralTestArtifactDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeneralTestArtifactDeleteEvent(req, res, next);
};

module.exports.listenToGeneralTestArtifactStateChangeEvent = function listenToGeneralTestArtifactStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeneralTestArtifactStateChangeEvent(req, res, next);
};
