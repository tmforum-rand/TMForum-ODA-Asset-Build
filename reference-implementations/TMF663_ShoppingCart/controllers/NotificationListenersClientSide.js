'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToShoppingCartAttributeValueChangeEvent = function listenToShoppingCartAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToShoppingCartAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToShoppingCartCreateEvent = function listenToShoppingCartCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToShoppingCartCreateEvent(req, res, next);
};

module.exports.listenToShoppingCartDeleteEvent = function listenToShoppingCartDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToShoppingCartDeleteEvent(req, res, next);
};
