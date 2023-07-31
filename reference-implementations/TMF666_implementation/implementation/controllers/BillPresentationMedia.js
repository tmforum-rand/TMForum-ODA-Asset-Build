'use strict';

var url = require('url');

var BillPresentationMedia = require('../service/BillPresentationMediaService');

module.exports.createBillPresentationMedia = function createBillPresentationMedia (req, res, next) {
  BillPresentationMedia.createBillPresentationMedia(req, res, next);
};

module.exports.deleteBillPresentationMedia = function deleteBillPresentationMedia (req, res, next) {
  BillPresentationMedia.deleteBillPresentationMedia(req, res, next);
};

module.exports.listBillPresentationMedia = function listBillPresentationMedia (req, res, next) {
  BillPresentationMedia.listBillPresentationMedia(req, res, next);
};

module.exports.patchBillPresentationMedia = function patchBillPresentationMedia (req, res, next) {
  BillPresentationMedia.patchBillPresentationMedia(req, res, next);
};

module.exports.retrieveBillPresentationMedia = function retrieveBillPresentationMedia (req, res, next) {
  BillPresentationMedia.retrieveBillPresentationMedia(req, res, next);
};
