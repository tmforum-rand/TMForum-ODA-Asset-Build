'use strict';

var url = require('url');

var Quote = require('../service/QuoteService');

module.exports.createQuote = function createQuote (req, res, next) {
  Quote.createQuote(req, res, next);
};

module.exports.deleteQuote = function deleteQuote (req, res, next) {
  Quote.deleteQuote(req, res, next);
};

module.exports.listQuote = function listQuote (req, res, next) {
  Quote.listQuote(req, res, next);
};

module.exports.patchQuote = function patchQuote (req, res, next) {
  Quote.patchQuote(req, res, next);
};

module.exports.retrieveQuote = function retrieveQuote (req, res, next) {
  Quote.retrieveQuote(req, res, next);
};
