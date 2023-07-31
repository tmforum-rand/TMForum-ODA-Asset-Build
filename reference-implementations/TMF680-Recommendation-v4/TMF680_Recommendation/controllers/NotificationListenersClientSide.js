'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToQueryProductRecommendationCreateEvent = function listenToQueryProductRecommendationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryProductRecommendationCreateEvent(req, res, next);
};

module.exports.listenToQueryProductRecommendationStateChangeEvent = function listenToQueryProductRecommendationStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToQueryProductRecommendationStateChangeEvent(req, res, next);
};
