'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToQueryUsageConsumptionCreateEvent = function listenToQueryUsageConsumptionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryUsageConsumptionCreateEvent(req, res, next);
};

module.exports.listenToQueryUsageConsumptionDeleteEvent = function listenToQueryUsageConsumptionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryUsageConsumptionDeleteEvent(req, res, next);
};
