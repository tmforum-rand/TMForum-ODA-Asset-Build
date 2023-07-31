'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceProblemAttributeValueChangeEvent = function listenToServiceProblemAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToServiceProblemCreateEvent = function listenToServiceProblemCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemCreateEvent(req, res, next);
};

module.exports.listenToServiceProblemInformationRequiredEvent = function listenToServiceProblemInformationRequiredEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemInformationRequiredEvent(req, res, next);
};

module.exports.listenToServiceProblemStateChangeEvent = function listenToServiceProblemStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToServiceProblemStateChangeEvent(req, res, next);
};
