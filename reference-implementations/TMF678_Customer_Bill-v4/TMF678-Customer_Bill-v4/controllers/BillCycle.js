'use strict';

var url = require('url');

var BillCycle = require('../service/BillCycleService');

module.exports.listBillCycle = function listBillCycle (req, res, next) {
  BillCycle.listBillCycle(req, res, next);
};

module.exports.retrieveBillCycle = function retrieveBillCycle (req, res, next) {
  BillCycle.retrieveBillCycle(req, res, next);
};
