'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToTestScenarioAttributeValueChangeEvent = function listenToTestScenarioAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestScenarioAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestScenarioChangeEvent = function listenToTestScenarioChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestScenarioChangeEvent(req, res, next);
};

module.exports.listenToTestScenarioCreateEvent = function listenToTestScenarioCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestScenarioCreateEvent(req, res, next);
};

module.exports.listenToTestScenarioDeleteEvent = function listenToTestScenarioDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestScenarioDeleteEvent(req, res, next);
};

module.exports.listenToTestScenarioStateChangeEvent = function listenToTestScenarioStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestScenarioStateChangeEvent(req, res, next);
};
