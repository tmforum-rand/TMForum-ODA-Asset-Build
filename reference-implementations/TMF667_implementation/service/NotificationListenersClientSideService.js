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

exports.listenToDocumentBatchEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentBatchEvent
   * Example of a client listener for receiving the notification DocumentBatchEvent
   *
   * data DocumentBatchEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentBatchEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentBatchEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentBatchEvent', payload))
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
            console.log("listenToDocumentBatchEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentBatchEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentBatchEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentChangeEvent
   * Example of a client listener for receiving the notification DocumentChangeEvent
   *
   * data DocumentChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentChangeEvent', payload))
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
            console.log("listenToDocumentChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentCreateEvent
   * Example of a client listener for receiving the notification DocumentCreateEvent
   *
   * data DocumentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentCreateEvent', payload))
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
            console.log("listenToDocumentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentDeleteEvent
   * Example of a client listener for receiving the notification DocumentDeleteEvent
   *
   * data DocumentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentDeleteEvent', payload))
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
            console.log("listenToDocumentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentSpecificationAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification DocumentSpecificationAttributeValueChangeEvent
   *
   * data DocumentSpecificationAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentSpecificationAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentSpecificationAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentSpecificationAttributeValueChangeEvent', payload))
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
            console.log("listenToDocumentSpecificationAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentSpecificationAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentSpecificationAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentSpecificationCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentSpecificationCreateEvent
   * Example of a client listener for receiving the notification DocumentSpecificationCreateEvent
   *
   * data DocumentSpecificationCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentSpecificationCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentSpecificationCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentSpecificationCreateEvent', payload))
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
            console.log("listenToDocumentSpecificationCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentSpecificationCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentSpecificationCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToDocumentSpecificationDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity DocumentSpecificationDeleteEvent
   * Example of a client listener for receiving the notification DocumentSpecificationDeleteEvent
   *
   * data DocumentSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToDocumentSpecificationDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToDocumentSpecificationDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToDocumentSpecificationDeleteEvent', payload))
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
            console.log("listenToDocumentSpecificationDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToDocumentSpecificationDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToDocumentSpecificationDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};



