'use strict';

var url = require('url');

var BillCycleSpecification = require('../service/BillCycleSpecificationService');

module.exports.listBillCycleSpecification = function listBillCycleSpecification (req, res, next) {
  BillCycleSpecification.listBillCycleSpecification(req, res, next);
};

module.exports.retrieveBillCycleSpecification = function retrieveBillCycleSpecification (req, res, next) {
  BillCycleSpecification.retrieveBillCycleSpecification(req, res, next);
};
