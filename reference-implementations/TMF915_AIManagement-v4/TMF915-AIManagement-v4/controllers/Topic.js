'use strict';

var url = require('url');

var Topic = require('../service/TopicService');

module.exports.createTopic = function createTopic (req, res, next) {
  Topic.createTopic(req, res, next);
};

module.exports.deleteTopic = function deleteTopic (req, res, next) {
  Topic.deleteTopic(req, res, next);
};

module.exports.listTopic = function listTopic (req, res, next) {
  Topic.listTopic(req, res, next);
};

module.exports.retrieveTopic = function retrieveTopic (req, res, next) {
  Topic.retrieveTopic(req, res, next);
};
