'use strict';

var url = require('url');

var SearchTimeSlot = require('../service/SearchTimeSlotService');

module.exports.createSearchTimeSlot = function createSearchTimeSlot (req, res, next) {
  SearchTimeSlot.createSearchTimeSlot(req, res, next);
};

module.exports.deleteSearchTimeSlot = function deleteSearchTimeSlot (req, res, next) {
  SearchTimeSlot.deleteSearchTimeSlot(req, res, next);
};

module.exports.listSearchTimeSlot = function listSearchTimeSlot (req, res, next) {
  SearchTimeSlot.listSearchTimeSlot(req, res, next);
};

module.exports.patchSearchTimeSlot = function patchSearchTimeSlot (req, res, next) {
  SearchTimeSlot.patchSearchTimeSlot(req, res, next);
};

module.exports.retrieveSearchTimeSlot = function retrieveSearchTimeSlot (req, res, next) {
  SearchTimeSlot.retrieveSearchTimeSlot(req, res, next);
};
