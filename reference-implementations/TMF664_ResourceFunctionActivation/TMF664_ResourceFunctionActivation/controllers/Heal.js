'use strict';

var url = require('url');

var Heal = require('../service/HealService');

module.exports.createHeal = function createHeal (req, res, next) {
  Heal.createHeal(req, res, next);
};

module.exports.listHeal = function listHeal (req, res, next) {
  Heal.listHeal(req, res, next);
};

module.exports.retrieveHeal = function retrieveHeal (req, res, next) {
  Heal.retrieveHeal(req, res, next);
};
