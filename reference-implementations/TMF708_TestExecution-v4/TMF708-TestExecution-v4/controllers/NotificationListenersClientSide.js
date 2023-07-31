'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToNonFunctionalTestExecutionCreateEvent = function listenToNonFunctionalTestExecutionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestExecutionCreateEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestExecutionDeleteEvent = function listenToNonFunctionalTestExecutionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestExecutionDeleteEvent(req, res, next);
};

module.exports.listenToNonFunctionalTestExecutionStateChangeEvent = function listenToNonFunctionalTestExecutionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToNonFunctionalTestExecutionStateChangeEvent(req, res, next);
};

module.exports.listenToTestCaseExecutionCreateEvent = function listenToTestCaseExecutionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseExecutionCreateEvent(req, res, next);
};

module.exports.listenToTestCaseExecutionDeleteEvent = function listenToTestCaseExecutionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseExecutionDeleteEvent(req, res, next);
};

module.exports.listenToTestCaseExecutionStateChangeEvent = function listenToTestCaseExecutionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestCaseExecutionStateChangeEvent(req, res, next);
};

module.exports.listenToTestEnvironmentAllocationExecutionCreateEvent = function listenToTestEnvironmentAllocationExecutionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentAllocationExecutionCreateEvent(req, res, next);
};

module.exports.listenToTestEnvironmentAllocationExecutionDeleteEvent = function listenToTestEnvironmentAllocationExecutionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentAllocationExecutionDeleteEvent(req, res, next);
};

module.exports.listenToTestEnvironmentAllocationExecutionStateChangeEvent = function listenToTestEnvironmentAllocationExecutionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentAllocationExecutionStateChangeEvent(req, res, next);
};

module.exports.listenToTestEnvironmentProvisioningExecutionCreateEvent = function listenToTestEnvironmentProvisioningExecutionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentProvisioningExecutionCreateEvent(req, res, next);
};

module.exports.listenToTestEnvironmentProvisioningExecutionDeleteEvent = function listenToTestEnvironmentProvisioningExecutionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentProvisioningExecutionDeleteEvent(req, res, next);
};

module.exports.listenToTestEnvironmentProvisioningExecutionStateChangeEvent = function listenToTestEnvironmentProvisioningExecutionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestEnvironmentProvisioningExecutionStateChangeEvent(req, res, next);
};

module.exports.listenToTestSuiteExecutionCreateEvent = function listenToTestSuiteExecutionCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteExecutionCreateEvent(req, res, next);
};

module.exports.listenToTestSuiteExecutionDeleteEvent = function listenToTestSuiteExecutionDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteExecutionDeleteEvent(req, res, next);
};

module.exports.listenToTestSuiteExecutionStateChangeEvent = function listenToTestSuiteExecutionStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestSuiteExecutionStateChangeEvent(req, res, next);
};
