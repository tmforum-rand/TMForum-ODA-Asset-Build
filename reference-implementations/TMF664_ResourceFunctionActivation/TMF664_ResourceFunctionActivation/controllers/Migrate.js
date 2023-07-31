'use strict';

var url = require('url');

var Migrate = require('../service/MigrateService');

module.exports.createMigrate = function createMigrate (req, res, next) {
  Migrate.createMigrate(req, res, next);
};

module.exports.listMigrate = function listMigrate (req, res, next) {
  Migrate.listMigrate(req, res, next);
};

module.exports.retrieveMigrate = function retrieveMigrate (req, res, next) {
  Migrate.retrieveMigrate(req, res, next);
};
