'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToGeographicSiteAttributeValueChangeEvent = function listenToGeographicSiteAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeographicSiteAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToGeographicSiteCreateEvent = function listenToGeographicSiteCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeographicSiteCreateEvent(req, res, next);
};

module.exports.listenToGeographicSiteDeleteEvent = function listenToGeographicSiteDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeographicSiteDeleteEvent(req, res, next);
};

module.exports.listenToGeographicSiteStatusChangeEvent = function listenToGeographicSiteStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToGeographicSiteStatusChangeEvent(req, res, next);
};
