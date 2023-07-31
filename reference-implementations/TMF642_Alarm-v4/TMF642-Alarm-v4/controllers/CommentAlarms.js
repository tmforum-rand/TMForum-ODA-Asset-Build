'use strict';

var url = require('url');

var CommentAlarms = require('../service/CommentAlarmsService');

module.exports.createCommentAlarms = function createCommentAlarms (req, res, next) {
  CommentAlarms.createCommentAlarms(req, res, next);
};

module.exports.listCommentAlarms = function listCommentAlarms (req, res, next) {
  CommentAlarms.listCommentAlarms(req, res, next);
};

module.exports.retrieveCommentAlarms = function retrieveCommentAlarms (req, res, next) {
  CommentAlarms.retrieveCommentAlarms(req, res, next);
};
