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

exports.listenToPartyRoleProductOfferingRiskAssessmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleProductOfferingRiskAssessmentCreateEvent
   * Example of a client listener for receiving the notification PartyRoleProductOfferingRiskAssessmentCreateEvent
   *
   * data PartyRoleProductOfferingRiskAssessmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleProductOfferingRiskAssessmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleProductOfferingRiskAssessmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleProductOfferingRiskAssessmentCreateEvent', payload))
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
            console.log("listenToPartyRoleProductOfferingRiskAssessmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleProductOfferingRiskAssessmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleProductOfferingRiskAssessmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleProductOfferingRiskAssessmentDeleteEvent
   * Example of a client listener for receiving the notification PartyRoleProductOfferingRiskAssessmentDeleteEvent
   *
   * data PartyRoleProductOfferingRiskAssessmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent', payload))
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
            console.log("listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleProductOfferingRiskAssessmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleProductOfferingRiskAssessmentStatusChangeEvent
   * Example of a client listener for receiving the notification PartyRoleProductOfferingRiskAssessmentStatusChangeEvent
   *
   * data PartyRoleProductOfferingRiskAssessmentStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent', payload))
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
            console.log("listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleProductOfferingRiskAssessmentStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPartyRoleRiskAssessmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleRiskAssessmentCreateEvent
   * Example of a client listener for receiving the notification PartyRoleRiskAssessmentCreateEvent
   *
   * data PartyRoleRiskAssessmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleRiskAssessmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleRiskAssessmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleRiskAssessmentCreateEvent', payload))
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
            console.log("listenToPartyRoleRiskAssessmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleRiskAssessmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleRiskAssessmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPartyRoleRiskAssessmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleRiskAssessmentDeleteEvent
   * Example of a client listener for receiving the notification PartyRoleRiskAssessmentDeleteEvent
   *
   * data PartyRoleRiskAssessmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleRiskAssessmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleRiskAssessmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleRiskAssessmentDeleteEvent', payload))
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
            console.log("listenToPartyRoleRiskAssessmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleRiskAssessmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleRiskAssessmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToPartyRoleRiskAssessmentStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity PartyRoleRiskAssessmentStatusChangeEvent
   * Example of a client listener for receiving the notification PartyRoleRiskAssessmentStatusChangeEvent
   *
   * data PartyRoleRiskAssessmentStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToPartyRoleRiskAssessmentStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToPartyRoleRiskAssessmentStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToPartyRoleRiskAssessmentStatusChangeEvent', payload))
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
            console.log("listenToPartyRoleRiskAssessmentStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToPartyRoleRiskAssessmentStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToPartyRoleRiskAssessmentStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOfferingRiskAssessmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOfferingRiskAssessmentCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingRiskAssessmentCreateEvent
   *
   * data ProductOfferingRiskAssessmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOfferingRiskAssessmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOfferingRiskAssessmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOfferingRiskAssessmentCreateEvent', payload))
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
            console.log("listenToProductOfferingRiskAssessmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOfferingRiskAssessmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOfferingRiskAssessmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOfferingRiskAssessmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOfferingRiskAssessmentDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingRiskAssessmentDeleteEvent
   *
   * data ProductOfferingRiskAssessmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOfferingRiskAssessmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOfferingRiskAssessmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOfferingRiskAssessmentDeleteEvent', payload))
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
            console.log("listenToProductOfferingRiskAssessmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOfferingRiskAssessmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOfferingRiskAssessmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOfferingRiskAssessmentStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOfferingRiskAssessmentStatusChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingRiskAssessmentStatusChangeEvent
   *
   * data ProductOfferingRiskAssessmentStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOfferingRiskAssessmentStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOfferingRiskAssessmentStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOfferingRiskAssessmentStatusChangeEvent', payload))
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
            console.log("listenToProductOfferingRiskAssessmentStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOfferingRiskAssessmentStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOfferingRiskAssessmentStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOrderRiskAssessmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOrderRiskAssessmentCreateEvent
   * Example of a client listener for receiving the notification ProductOrderRiskAssessmentCreateEvent
   *
   * data ProductOrderRiskAssessmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOrderRiskAssessmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOrderRiskAssessmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOrderRiskAssessmentCreateEvent', payload))
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
            console.log("listenToProductOrderRiskAssessmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOrderRiskAssessmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOrderRiskAssessmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOrderRiskAssessmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOrderRiskAssessmentDeleteEvent
   * Example of a client listener for receiving the notification ProductOrderRiskAssessmentDeleteEvent
   *
   * data ProductOrderRiskAssessmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOrderRiskAssessmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOrderRiskAssessmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOrderRiskAssessmentDeleteEvent', payload))
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
            console.log("listenToProductOrderRiskAssessmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOrderRiskAssessmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOrderRiskAssessmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProductOrderRiskAssessmentStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ProductOrderRiskAssessmentStatusChangeEvent
   * Example of a client listener for receiving the notification ProductOrderRiskAssessmentStatusChangeEvent
   *
   * data ProductOrderRiskAssessmentStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProductOrderRiskAssessmentStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProductOrderRiskAssessmentStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProductOrderRiskAssessmentStatusChangeEvent', payload))
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
            console.log("listenToProductOrderRiskAssessmentStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProductOrderRiskAssessmentStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProductOrderRiskAssessmentStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToShoppingCartRiskAssessmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity ShoppingCartRiskAssessmentCreateEvent
   * Example of a client listener for receiving the notification ShoppingCartRiskAssessmentCreateEvent
   *
   * data ShoppingCartRiskAssessmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToShoppingCartRiskAssessmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToShoppingCartRiskAssessmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToShoppingCartRiskAssessmentCreateEvent', payload))
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
            console.log("listenToShoppingCartRiskAssessmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToShoppingCartRiskAssessmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToShoppingCartRiskAssessmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToShoppingCartRiskAssessmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity ShoppingCartRiskAssessmentDeleteEvent
   * Example of a client listener for receiving the notification ShoppingCartRiskAssessmentDeleteEvent
   *
   * data ShoppingCartRiskAssessmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToShoppingCartRiskAssessmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToShoppingCartRiskAssessmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToShoppingCartRiskAssessmentDeleteEvent', payload))
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
            console.log("listenToShoppingCartRiskAssessmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToShoppingCartRiskAssessmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToShoppingCartRiskAssessmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToShoppingCartRiskAssessmentStatusChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ShoppingCartRiskAssessmentStatusChangeEvent
   * Example of a client listener for receiving the notification ShoppingCartRiskAssessmentStatusChangeEvent
   *
   * data ShoppingCartRiskAssessmentStatusChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToShoppingCartRiskAssessmentStatusChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToShoppingCartRiskAssessmentStatusChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToShoppingCartRiskAssessmentStatusChangeEvent', payload))
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
            console.log("listenToShoppingCartRiskAssessmentStatusChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToShoppingCartRiskAssessmentStatusChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToShoppingCartRiskAssessmentStatusChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};



