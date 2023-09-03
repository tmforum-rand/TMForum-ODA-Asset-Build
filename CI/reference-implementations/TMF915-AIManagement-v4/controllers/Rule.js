'use strict';

var url = require('url');

var Rule = require('../service/RuleService');

module.exports.createRule = function createRule (req, res, next) {
  Rule.createRule(req, res, next);
};

module.exports.deleteRule = function deleteRule (req, res, next) {
  Rule.deleteRule(req, res, next);
};

module.exports.listRule = function listRule (req, res, next) {
  Rule.listRule(req, res, next);
};

module.exports.patchRule = function patchRule (req, res, next) {
  Rule.patchRule(req, res, next);
};

module.exports.retrieveRule = function retrieveRule (req, res, next) {
  Rule.retrieveRule(req, res, next);
};
