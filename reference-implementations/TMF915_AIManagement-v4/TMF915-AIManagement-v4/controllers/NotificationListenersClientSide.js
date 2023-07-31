'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAiContractAttributeValueChangeEvent = function listenToAiContractAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAiContractCreateEvent = function listenToAiContractCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractCreateEvent(req, res, next);
};

module.exports.listenToAiContractDeleteEvent = function listenToAiContractDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractDeleteEvent(req, res, next);
};

module.exports.listenToAiContractSpecificationAttributeValueChangeEvent = function listenToAiContractSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAiContractSpecificationCreateEvent = function listenToAiContractSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractSpecificationCreateEvent(req, res, next);
};

module.exports.listenToAiContractSpecificationDeleteEvent = function listenToAiContractSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractSpecificationDeleteEvent(req, res, next);
};

module.exports.listenToAiContractStateChangeEvent = function listenToAiContractStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractStateChangeEvent(req, res, next);
};

module.exports.listenToAiContractViolationAttributeValueChangeEvent = function listenToAiContractViolationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractViolationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAiContractViolationCreateEvent = function listenToAiContractViolationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractViolationCreateEvent(req, res, next);
};

module.exports.listenToAiContractViolationDeleteEvent = function listenToAiContractViolationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiContractViolationDeleteEvent(req, res, next);
};

module.exports.listenToAiModelAttributeValueChangeEvent = function listenToAiModelAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAiModelCreateEvent = function listenToAiModelCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelCreateEvent(req, res, next);
};

module.exports.listenToAiModelDeleteEvent = function listenToAiModelDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelDeleteEvent(req, res, next);
};

module.exports.listenToAiModelSpecificationAttributeValueChangeEvent = function listenToAiModelSpecificationAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelSpecificationAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAiModelSpecificationCreateEvent = function listenToAiModelSpecificationCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelSpecificationCreateEvent(req, res, next);
};

module.exports.listenToAiModelSpecificationDeleteEvent = function listenToAiModelSpecificationDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelSpecificationDeleteEvent(req, res, next);
};

module.exports.listenToAiModelStateChangeEvent = function listenToAiModelStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAiModelStateChangeEvent(req, res, next);
};

module.exports.listenToAlarmAttributeValueChangeEvent = function listenToAlarmAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAlarmCreateEvent = function listenToAlarmCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmCreateEvent(req, res, next);
};

module.exports.listenToAlarmDeleteEvent = function listenToAlarmDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmDeleteEvent(req, res, next);
};

module.exports.listenToAlarmStateChangeEvent = function listenToAlarmStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAlarmStateChangeEvent(req, res, next);
};

module.exports.listenToEventCreateEvent = function listenToEventCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToEventCreateEvent(req, res, next);
};

module.exports.listenToMonitorAttributeValueChangeEvent = function listenToMonitorAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToMonitorCreateEvent = function listenToMonitorCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorCreateEvent(req, res, next);
};

module.exports.listenToMonitorDeleteEvent = function listenToMonitorDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorDeleteEvent(req, res, next);
};

module.exports.listenToMonitorStateChangeEvent = function listenToMonitorStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToMonitorStateChangeEvent(req, res, next);
};

module.exports.listenToRuleAttributeValueChangeEvent = function listenToRuleAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToRuleAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToRuleCreateEvent = function listenToRuleCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToRuleCreateEvent(req, res, next);
};

module.exports.listenToRuleDeleteEvent = function listenToRuleDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToRuleDeleteEvent(req, res, next);
};

module.exports.listenToRuleStateChangeEvent = function listenToRuleStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToRuleStateChangeEvent(req, res, next);
};

module.exports.listenToTopicChangeEvent = function listenToTopicChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopicChangeEvent(req, res, next);
};

module.exports.listenToTopicCreateEvent = function listenToTopicCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopicCreateEvent(req, res, next);
};

module.exports.listenToTopicDeleteEvent = function listenToTopicDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopicDeleteEvent(req, res, next);
};
