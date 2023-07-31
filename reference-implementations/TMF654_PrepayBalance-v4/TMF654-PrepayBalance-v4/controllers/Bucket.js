'use strict';

var url = require('url');

var Bucket = require('../service/BucketService');

module.exports.createBucket = function createBucket (req, res, next) {
  Bucket.createBucket(req, res, next);
};

module.exports.deleteBucket = function deleteBucket (req, res, next) {
  Bucket.deleteBucket(req, res, next);
};

module.exports.listBucket = function listBucket (req, res, next) {
  Bucket.listBucket(req, res, next);
};

module.exports.retrieveBucket = function retrieveBucket (req, res, next) {
  Bucket.retrieveBucket(req, res, next);
};
