'use strict';

var url = require('url');

var Hub = require('../service/HubService');

module.exports.createHub = function createHub (req, res, next) {
  Hub.createHub(req, res, next);
};

module.exports.deleteHub = function deleteHub (req, res, next) {
  Hub.deleteHub(req, res, next);
};

module.exports.listHub = function listHub (req, res, next) {
  Hub.listHub(req, res, next);
};

module.exports.retrieveHub = function retrieveHub (req, res, next) {
  Hub.retrieveHub(req, res, next);
};
