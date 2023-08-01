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

exports.listenToPaymentMethodAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity PaymentMethodAttributeValueChangeEvent
   * Example of a client listener for receiving the notification PaymentMethodAttributeValueChangeEvent
   *
   * data PaymentMethodAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPaymentMethodAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPaymentMethodAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPaymentMethodAttributeValueChangeEvent', payload))
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
            console.log("listenToPaymentMethodAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPaymentMethodAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPaymentMethodAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPaymentMethodCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity PaymentMethodCreateEvent
   * Example of a client listener for receiving the notification PaymentMethodCreateEvent
   *
   * data PaymentMethodCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPaymentMethodCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPaymentMethodCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPaymentMethodCreateEvent', payload))
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
            console.log("listenToPaymentMethodCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPaymentMethodCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPaymentMethodCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPaymentMethodDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity PaymentMethodDeleteEvent
   * Example of a client listener for receiving the notification PaymentMethodDeleteEvent
   *
   * data PaymentMethodDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPaymentMethodDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPaymentMethodDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPaymentMethodDeleteEvent', payload))
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
            console.log("listenToPaymentMethodDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPaymentMethodDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPaymentMethodDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPaymentMethodStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity PaymentMethodStatusChangeEvent
   * Example of a client listener for receiving the notification PaymentMethodStatusChangeEvent
   *
   * data PaymentMethodStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPaymentMethodStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPaymentMethodStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPaymentMethodStatusChangeEvent', payload))
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
            console.log("listenToPaymentMethodStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPaymentMethodStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPaymentMethodStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};



