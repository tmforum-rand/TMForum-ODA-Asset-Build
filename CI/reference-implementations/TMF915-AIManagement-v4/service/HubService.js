'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getPayloadType, getPayloadSchema, getResponseType} = require('../utils/swaggerUtils');

const {updateQueryServiceType, updatePayloadServiceType, cleanPayloadServiceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.createHub = function(req, res, next) {
  /**
   * Creates a Hub
   * This operation creates a Hub entity.
   *
   * topicId String Identifier of the parent Topic entity
   * hub Hub_Create The Hub to be created
   * returns Hub
   **/

  console.log('createHub :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.deleteHub = function(req, res, next) {
  /**
   * Deletes a Hub
   * This operation deletes a Hub entity.
   *
   * topicId String Identifier of the parent Topic entity
   * id String Identifier of the Hub
   * no response value expected for this operation
   **/

  console.log('deleteHub :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.listHub = function(req, res, next) {
  /**
   * List or find Hub objects
   * This operation list or find Hub entities
   *
   * topicId String Identifier of the parent Topic entity
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('listHub :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulShow */

  notificationUtils.show(req, res, next);  


};

exports.retrieveHub = function(req, res, next) {
  /**
   * Retrieves a Hub by ID
   * This operation retrieves a Hub entity. Attribute selection is enabled for all first level attributes.
   *
   * topicId String Identifier of the parent Topic entity
   * id String Identifier of the Hub
   * fields String Comma-separated properties to provide in response (optional)
   * returns Hub
   **/

  console.log('retrieveHub :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulIndex */

  notificationUtils.index(req, res, next);


};



