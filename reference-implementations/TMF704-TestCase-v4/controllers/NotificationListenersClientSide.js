'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToNonFunctionalTestModelAttributeValueChangeEvent = function listenToNonFunctionalTestModelAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestModelAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestModelChangeEvent = function listenToNonFunctionalTestModelChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestModelChangeEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestModelCreateEvent = function listenToNonFunctionalTestModelCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestModelCreateEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestModelDeleteEvent = function listenToNonFunctionalTestModelDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestModelDeleteEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestModelStateChangeEvent = function listenToNonFunctionalTestModelStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestModelStateChangeEvent(req, res, next);
};

module.exports.listenToTestCaseAttributeValueChangeEvent = function listenToTestCaseAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestCaseChangeEvent = function listenToTestCaseChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseChangeEvent(req, res, next);
};

module.exports.listenToTestCaseCreateEvent = function listenToTestCaseCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseCreateEvent(req, res, next);
};

module.exports.listenToTestCaseDeleteEvent = function listenToTestCaseDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseDeleteEvent(req, res, next);
};

module.exports.listenToTestCaseStateChangeEvent = function listenToTestCaseStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseStateChangeEvent(req, res, next);
};

module.exports.listenToTestSuiteAttributeValueChangeEvent = function listenToTestSuiteAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestSuiteChangeEvent = function listenToTestSuiteChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteChangeEvent(req, res, next);
};

module.exports.listenToTestSuiteCreateEvent = function listenToTestSuiteCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteCreateEvent(req, res, next);
};

module.exports.listenToTestSuiteDeleteEvent = function listenToTestSuiteDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteDeleteEvent(req, res, next);
};

module.exports.listenToTestSuiteStateChangeEvent = function listenToTestSuiteStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteStateChangeEvent(req, res, next);
};
