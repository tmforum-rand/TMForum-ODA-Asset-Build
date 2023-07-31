'use strict';

var url = require('url');

var BillFormat = require('../service/BillFormatService');

module.exports.createBillFormat = function createBillFormat (req, res, next) {
  BillFormat.createBillFormat(req, res, next);
};

module.exports.deleteBillFormat = function deleteBillFormat (req, res, next) {
  BillFormat.deleteBillFormat(req, res, next);
};

module.exports.listBillFormat = function listBillFormat (req, res, next) {
  BillFormat.listBillFormat(req, res, next);
};

module.exports.patchBillFormat = function patchBillFormat (req, res, next) {
  BillFormat.patchBillFormat(req, res, next);
};

module.exports.retrieveBillFormat = function retrieveBillFormat (req, res, next) {
  BillFormat.retrieveBillFormat(req, res, next);
};
