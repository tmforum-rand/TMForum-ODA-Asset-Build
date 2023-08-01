'use strict';

var url = require('url');

var Document = require('../service/DocumentService');

module.exports.createDocument = function createDocument (req, res, next) {
  Document.createDocument(req, res, next);
};

module.exports.deleteDocument = function deleteDocument (req, res, next) {
  Document.deleteDocument(req, res, next);
};

module.exports.listDocument = function listDocument (req, res, next) {
  Document.listDocument(req, res, next);
};

module.exports.patchDocument = function patchDocument (req, res, next) {
  Document.patchDocument(req, res, next);
};

module.exports.retrieveDocument = function retrieveDocument (req, res, next) {
  Document.retrieveDocument(req, res, next);
};
