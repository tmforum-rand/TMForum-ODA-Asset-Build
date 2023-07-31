'use strict';

var url = require('url');

var ShoppingCart = require('../service/ShoppingCartService');

module.exports.createShoppingCart = function createShoppingCart (req, res, next) {
  ShoppingCart.createShoppingCart(req, res, next);
};

module.exports.deleteShoppingCart = function deleteShoppingCart (req, res, next) {
  ShoppingCart.deleteShoppingCart(req, res, next);
};

module.exports.listShoppingCart = function listShoppingCart (req, res, next) {
  ShoppingCart.listShoppingCart(req, res, next);
};

module.exports.patchShoppingCart = function patchShoppingCart (req, res, next) {
  ShoppingCart.patchShoppingCart(req, res, next);
};

module.exports.retrieveShoppingCart = function retrieveShoppingCart (req, res, next) {
  ShoppingCart.retrieveShoppingCart(req, res, next);
};
