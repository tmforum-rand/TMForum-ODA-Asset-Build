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

exports.listenToNonFunctionalTestExecutionCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity NonFunctionalTestExecutionCreateEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionCreateEvent
   *
   * data NonFunctionalTestExecutionCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToNonFunctionalTestExecutionCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToNonFunctionalTestExecutionCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToNonFunctionalTestExecutionCreateEvent', payload))
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
            console.log("listenToNonFunctionalTestExecutionCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToNonFunctionalTestExecutionCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToNonFunctionalTestExecutionCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToNonFunctionalTestExecutionDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity NonFunctionalTestExecutionDeleteEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionDeleteEvent
   *
   * data NonFunctionalTestExecutionDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToNonFunctionalTestExecutionDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToNonFunctionalTestExecutionDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToNonFunctionalTestExecutionDeleteEvent', payload))
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
            console.log("listenToNonFunctionalTestExecutionDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToNonFunctionalTestExecutionDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToNonFunctionalTestExecutionDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToNonFunctionalTestExecutionStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity NonFunctionalTestExecutionStateChangeEvent
   * Example of a client listener for receiving the notification NonFunctionalTestExecutionStateChangeEvent
   *
   * data NonFunctionalTestExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToNonFunctionalTestExecutionStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToNonFunctionalTestExecutionStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToNonFunctionalTestExecutionStateChangeEvent', payload))
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
            console.log("listenToNonFunctionalTestExecutionStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToNonFunctionalTestExecutionStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToNonFunctionalTestExecutionStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestCaseExecutionCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity TestCaseExecutionCreateEvent
   * Example of a client listener for receiving the notification TestCaseExecutionCreateEvent
   *
   * data TestCaseExecutionCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestCaseExecutionCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestCaseExecutionCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestCaseExecutionCreateEvent', payload))
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
            console.log("listenToTestCaseExecutionCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestCaseExecutionCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestCaseExecutionCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestCaseExecutionDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity TestCaseExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestCaseExecutionDeleteEvent
   *
   * data TestCaseExecutionDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestCaseExecutionDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestCaseExecutionDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestCaseExecutionDeleteEvent', payload))
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
            console.log("listenToTestCaseExecutionDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestCaseExecutionDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestCaseExecutionDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestCaseExecutionStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestCaseExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestCaseExecutionStateChangeEvent
   *
   * data TestCaseExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestCaseExecutionStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestCaseExecutionStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestCaseExecutionStateChangeEvent', payload))
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
            console.log("listenToTestCaseExecutionStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestCaseExecutionStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestCaseExecutionStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentAllocationExecutionCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionCreateEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionCreateEvent
   *
   * data TestEnvironmentAllocationExecutionCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentAllocationExecutionCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentAllocationExecutionCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentAllocationExecutionCreateEvent', payload))
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
            console.log("listenToTestEnvironmentAllocationExecutionCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentAllocationExecutionCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentAllocationExecutionCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentAllocationExecutionDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionDeleteEvent
   *
   * data TestEnvironmentAllocationExecutionDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentAllocationExecutionDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentAllocationExecutionDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentAllocationExecutionDeleteEvent', payload))
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
            console.log("listenToTestEnvironmentAllocationExecutionDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentAllocationExecutionDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentAllocationExecutionDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentAllocationExecutionStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentAllocationExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestEnvironmentAllocationExecutionStateChangeEvent
   *
   * data TestEnvironmentAllocationExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentAllocationExecutionStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentAllocationExecutionStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentAllocationExecutionStateChangeEvent', payload))
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
            console.log("listenToTestEnvironmentAllocationExecutionStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentAllocationExecutionStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentAllocationExecutionStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentProvisioningExecutionCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionCreateEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionCreateEvent
   *
   * data TestEnvironmentProvisioningExecutionCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentProvisioningExecutionCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentProvisioningExecutionCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentProvisioningExecutionCreateEvent', payload))
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
            console.log("listenToTestEnvironmentProvisioningExecutionCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentProvisioningExecutionCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentProvisioningExecutionCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentProvisioningExecutionDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionDeleteEvent
   *
   * data TestEnvironmentProvisioningExecutionDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentProvisioningExecutionDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentProvisioningExecutionDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentProvisioningExecutionDeleteEvent', payload))
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
            console.log("listenToTestEnvironmentProvisioningExecutionDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentProvisioningExecutionDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentProvisioningExecutionDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestEnvironmentProvisioningExecutionStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestEnvironmentProvisioningExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestEnvironmentProvisioningExecutionStateChangeEvent
   *
   * data TestEnvironmentProvisioningExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestEnvironmentProvisioningExecutionStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestEnvironmentProvisioningExecutionStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestEnvironmentProvisioningExecutionStateChangeEvent', payload))
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
            console.log("listenToTestEnvironmentProvisioningExecutionStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestEnvironmentProvisioningExecutionStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestEnvironmentProvisioningExecutionStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestSuiteExecutionCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity TestSuiteExecutionCreateEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionCreateEvent
   *
   * data TestSuiteExecutionCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestSuiteExecutionCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestSuiteExecutionCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestSuiteExecutionCreateEvent', payload))
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
            console.log("listenToTestSuiteExecutionCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestSuiteExecutionCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestSuiteExecutionCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestSuiteExecutionDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity TestSuiteExecutionDeleteEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionDeleteEvent
   *
   * data TestSuiteExecutionDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestSuiteExecutionDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestSuiteExecutionDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestSuiteExecutionDeleteEvent', payload))
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
            console.log("listenToTestSuiteExecutionDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestSuiteExecutionDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestSuiteExecutionDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestSuiteExecutionStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestSuiteExecutionStateChangeEvent
   * Example of a client listener for receiving the notification TestSuiteExecutionStateChangeEvent
   *
   * data TestSuiteExecutionStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestSuiteExecutionStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestSuiteExecutionStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestSuiteExecutionStateChangeEvent', payload))
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
            console.log("listenToTestSuiteExecutionStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestSuiteExecutionStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestSuiteExecutionStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};



