'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToAdjustBalanceAttributeValueChangeEvent = function listenToAdjustBalanceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToAdjustBalanceCancelEvent = function listenToAdjustBalanceCancelEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceCancelEvent(req, res, next);
};

module.exports.listenToAdjustBalanceCreateEvent = function listenToAdjustBalanceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceCreateEvent(req, res, next);
};

module.exports.listenToAdjustBalanceDeleteEvent = function listenToAdjustBalanceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceDeleteEvent(req, res, next);
};

module.exports.listenToAdjustBalanceFailureEvent = function listenToAdjustBalanceFailureEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceFailureEvent(req, res, next);
};

module.exports.listenToAdjustBalanceStatusChangeEvent = function listenToAdjustBalanceStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToAdjustBalanceStatusChangeEvent(req, res, next);
};

module.exports.listenToBucketAttributeValueChangeEvent = function listenToBucketAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToBucketAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToBucketCreateEvent = function listenToBucketCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToBucketCreateEvent(req, res, next);
};

module.exports.listenToBucketDeleteEvent = function listenToBucketDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToBucketDeleteEvent(req, res, next);
};

module.exports.listenToReserveBalanceAttributeValueChangeEvent = function listenToReserveBalanceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToReserveBalanceCancelEvent = function listenToReserveBalanceCancelEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceCancelEvent(req, res, next);
};

module.exports.listenToReserveBalanceCreateEvent = function listenToReserveBalanceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceCreateEvent(req, res, next);
};

module.exports.listenToReserveBalanceDeleteEvent = function listenToReserveBalanceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceDeleteEvent(req, res, next);
};

module.exports.listenToReserveBalanceFailureEvent = function listenToReserveBalanceFailureEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceFailureEvent(req, res, next);
};

module.exports.listenToReserveBalanceStatusChangeEvent = function listenToReserveBalanceStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToReserveBalanceStatusChangeEvent(req, res, next);
};

module.exports.listenToTopupBalanceAttributeValueChangeEvent = function listenToTopupBalanceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTopupBalanceCancelEvent = function listenToTopupBalanceCancelEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceCancelEvent(req, res, next);
};

module.exports.listenToTopupBalanceCreateEvent = function listenToTopupBalanceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceCreateEvent(req, res, next);
};

module.exports.listenToTopupBalanceDeleteEvent = function listenToTopupBalanceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceDeleteEvent(req, res, next);
};

module.exports.listenToTopupBalanceFailureEvent = function listenToTopupBalanceFailureEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceFailureEvent(req, res, next);
};

module.exports.listenToTopupBalanceStatusChangeEvent = function listenToTopupBalanceStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTopupBalanceStatusChangeEvent(req, res, next);
};

module.exports.listenToTransferBalanceAttributeValueChangeEvent = function listenToTransferBalanceAttributeValueChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceAttributeValueChangeEvent(req, res, next);
};

module.exports.listenToTransferBalanceCancelEvent = function listenToTransferBalanceCancelEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceCancelEvent(req, res, next);
};

module.exports.listenToTransferBalanceCreateEvent = function listenToTransferBalanceCreateEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceCreateEvent(req, res, next);
};

module.exports.listenToTransferBalanceDeleteEvent = function listenToTransferBalanceDeleteEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceDeleteEvent(req, res, next);
};

module.exports.listenToTransferBalanceFailureEvent = function listenToTransferBalanceFailureEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceFailureEvent(req, res, next);
};

module.exports.listenToTransferBalanceStatusChangeEvent = function listenToTransferBalanceStatusChangeEvent (req, res, next) {
  NotificationListenersClientSide.listenToTransferBalanceStatusChangeEvent(req, res, next);
};
