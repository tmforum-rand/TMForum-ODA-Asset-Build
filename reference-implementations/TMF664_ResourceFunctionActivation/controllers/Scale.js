'use strict';

var url = require('url');

var Scale = require('../service/ScaleService');

module.exports.createScale = function createScale (req, res, next) {
  Scale.createScale(req, res, next);
};

module.exports.listScale = function listScale (req, res, next) {
  Scale.listScale(req, res, next);
};

module.exports.retrieveScale = function retrieveScale (req, res, next) {
  Scale.retrieveScale(req, res, next);
};
