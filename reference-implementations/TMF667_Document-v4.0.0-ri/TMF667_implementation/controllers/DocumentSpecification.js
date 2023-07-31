'use strict';

var url = require('url');

var DocumentSpecification = require('../service/DocumentSpecificationService');

module.exports.createDocumentSpecification = function createDocumentSpecification (req, res, next) {
  DocumentSpecification.createDocumentSpecification(req, res, next);
};

module.exports.deleteDocumentSpecification = function deleteDocumentSpecification (req, res, next) {
  DocumentSpecification.deleteDocumentSpecification(req, res, next);
};

module.exports.listDocumentSpecification = function listDocumentSpecification (req, res, next) {
  DocumentSpecification.listDocumentSpecification(req, res, next);
};

module.exports.patchDocumentSpecification = function patchDocumentSpecification (req, res, next) {
  DocumentSpecification.patchDocumentSpecification(req, res, next);
};

module.exports.retrieveDocumentSpecification = function retrieveDocumentSpecification (req, res, next) {
  DocumentSpecification.retrieveDocumentSpecification(req, res, next);
};
