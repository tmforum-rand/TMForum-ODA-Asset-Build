'use strict';

var url = require('url');

var BalanceAction = require('../service/BalanceActionService');

module.exports.listBalanceAction = function listBalanceAction (req, res, next) {
  BalanceAction.listBalanceAction(req, res, next);
};

module.exports.retrieveBalanceAction = function retrieveBalanceAction (req, res, next) {
  BalanceAction.retrieveBalanceAction(req, res, next);
};
