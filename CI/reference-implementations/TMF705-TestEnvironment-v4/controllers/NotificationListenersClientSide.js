'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAbstractEnvironmentAttributeValueChangeEvent = function listenToAbstractEnvironmentAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAbstractEnvironmentAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAbstractEnvironmentChangeEvent = function listenToAbstractEnvironmentChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAbstractEnvironmentChangeEvent(req, res, next);
};

module.exports.listenToAbstractEnvironmentCreateEvent = function listenToAbstractEnvironmentCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAbstractEnvironmentCreateEvent(req, res, next);
};

module.exports.listenToAbstractEnvironmentDeleteEvent = function listenToAbstractEnvironmentDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAbstractEnvironmentDeleteEvent(req, res, next);
};

module.exports.listenToAbstractEnvironmentStateChangeEvent = function listenToAbstractEnvironmentStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAbstractEnvironmentStateChangeEvent(req, res, next);
};

module.exports.listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent = function listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToConcreteEnvironmentMetaModelChangeEvent = function listenToConcreteEnvironmentMetaModelChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToConcreteEnvironmentMetaModelChangeEvent(req, res, next);
};

module.exports.listenToConcreteEnvironmentMetaModelCreateEvent = function listenToConcreteEnvironmentMetaModelCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToConcreteEnvironmentMetaModelCreateEvent(req, res, next);
};

module.exports.listenToConcreteEnvironmentMetaModelDeleteEvent = function listenToConcreteEnvironmentMetaModelDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToConcreteEnvironmentMetaModelDeleteEvent(req, res, next);
};

module.exports.listenToConcreteEnvironmentMetaModelStateChangeEvent = function listenToConcreteEnvironmentMetaModelStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToConcreteEnvironmentMetaModelStateChangeEvent(req, res, next);
};

module.exports.listenToProvisioningArtifactAttributeValueChangeEvent = function listenToProvisioningArtifactAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToProvisioningArtifactAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToProvisioningArtifactChangeEvent = function listenToProvisioningArtifactChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToProvisioningArtifactChangeEvent(req, res, next);
};

module.exports.listenToProvisioningArtifactCreateEvent = function listenToProvisioningArtifactCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToProvisioningArtifactCreateEvent(req, res, next);
};

module.exports.listenToProvisioningArtifactDeleteEvent = function listenToProvisioningArtifactDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToProvisioningArtifactDeleteEvent(req, res, next);
};

module.exports.listenToProvisioningArtifactStateChangeEvent = function listenToProvisioningArtifactStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToProvisioningArtifactStateChangeEvent(req, res, next);
};

module.exports.listenToTestResourceAPIAttributeValueChangeEvent = function listenToTestResourceAPIAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestResourceAPIAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTestResourceAPIChangeEvent = function listenToTestResourceAPIChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestResourceAPIChangeEvent(req, res, next);
};

module.exports.listenToTestResourceAPICreateEvent = function listenToTestResourceAPICreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestResourceAPICreateEvent(req, res, next);
};

module.exports.listenToTestResourceAPIDeleteEvent = function listenToTestResourceAPIDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestResourceAPIDeleteEvent(req, res, next);
};

module.exports.listenToTestResourceAPIStateChangeEvent = function listenToTestResourceAPIStateChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTestResourceAPIStateChangeEvent(req, res, next);
};
