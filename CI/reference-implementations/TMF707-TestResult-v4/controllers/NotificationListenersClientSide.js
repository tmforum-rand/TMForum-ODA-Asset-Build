'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToNonFunctionalTestResultChangeEvent = function listenToNonFunctionalTestResultChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestResultChangeEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestResultCreateEvent = function listenToNonFunctionalTestResultCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestResultCreateEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestResultDeleteEvent = function listenToNonFunctionalTestResultDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestResultDeleteEvent(req, res, next);
};

module.exports.listenToTestCaseResultChangeEvent = function listenToTestCaseResultChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseResultChangeEvent(req, res, next);
};

module.exports.listenToTestCaseResultCreateEvent = function listenToTestCaseResultCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseResultCreateEvent(req, res, next);
};

module.exports.listenToTestCaseResultDeleteEvent = function listenToTestCaseResultDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseResultDeleteEvent(req, res, next);
};

module.exports.listenToTestSuiteResultChangeEvent = function listenToTestSuiteResultChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteResultChangeEvent(req, res, next);
};

module.exports.listenToTestSuiteResultCreateEvent = function listenToTestSuiteResultCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteResultCreateEvent(req, res, next);
};

module.exports.listenToTestSuiteResultDeleteEvent = function listenToTestSuiteResultDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteResultDeleteEvent(req, res, next);
};
