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

exports.listenToCustomerAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity CustomerAttributeValueChangeEvent
   * Example of a client listener for receiving the notification CustomerAttributeValueChangeEvent
   *
   * data CustomerAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToCustomerAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToCustomerAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToCustomerAttributeValueChangeEvent', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToCustomerAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToCustomerAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToCustomerAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToCustomerCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity CustomerCreateEvent
   * Example of a client listener for receiving the notification CustomerCreateEvent
   *
   * data CustomerCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToCustomerCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToCustomerCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToCustomerCreateEvent', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToCustomerCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToCustomerCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToCustomerCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToCustomerDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity CustomerDeleteEvent
   * Example of a client listener for receiving the notification CustomerDeleteEvent
   *
   * data CustomerDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToCustomerDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToCustomerDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToCustomerDeleteEvent', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToCustomerDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToCustomerDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToCustomerDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToCustomerStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity CustomerStateChangeEvent
   * Example of a client listener for receiving the notification CustomerStateChangeEvent
   *
   * data CustomerStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToCustomerStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToCustomerStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToCustomerStateChangeEvent', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToCustomerStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToCustomerStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToCustomerStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};



