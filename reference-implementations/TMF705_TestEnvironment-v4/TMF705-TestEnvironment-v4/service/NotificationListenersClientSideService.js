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

exports.listenToAbstractEnvironmentAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity AbstractEnvironmentAttributeValueChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentAttributeValueChangeEvent
   *
   * data AbstractEnvironmentAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToAbstractEnvironmentAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToAbstractEnvironmentAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToAbstractEnvironmentAttributeValueChangeEvent', payload))
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
            console.log("listenToAbstractEnvironmentAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToAbstractEnvironmentAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToAbstractEnvironmentAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToAbstractEnvironmentChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity AbstractEnvironmentChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentChangeEvent
   *
   * data AbstractEnvironmentChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToAbstractEnvironmentChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToAbstractEnvironmentChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToAbstractEnvironmentChangeEvent', payload))
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
            console.log("listenToAbstractEnvironmentChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToAbstractEnvironmentChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToAbstractEnvironmentChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToAbstractEnvironmentCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity AbstractEnvironmentCreateEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentCreateEvent
   *
   * data AbstractEnvironmentCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToAbstractEnvironmentCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToAbstractEnvironmentCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToAbstractEnvironmentCreateEvent', payload))
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
            console.log("listenToAbstractEnvironmentCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToAbstractEnvironmentCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToAbstractEnvironmentCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToAbstractEnvironmentDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity AbstractEnvironmentDeleteEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentDeleteEvent
   *
   * data AbstractEnvironmentDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToAbstractEnvironmentDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToAbstractEnvironmentDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToAbstractEnvironmentDeleteEvent', payload))
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
            console.log("listenToAbstractEnvironmentDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToAbstractEnvironmentDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToAbstractEnvironmentDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToAbstractEnvironmentStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity AbstractEnvironmentStateChangeEvent
   * Example of a client listener for receiving the notification AbstractEnvironmentStateChangeEvent
   *
   * data AbstractEnvironmentStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToAbstractEnvironmentStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToAbstractEnvironmentStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToAbstractEnvironmentStateChangeEvent', payload))
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
            console.log("listenToAbstractEnvironmentStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToAbstractEnvironmentStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToAbstractEnvironmentStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelAttributeValueChangeEvent
   *
   * data ConcreteEnvironmentMetaModelAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent', payload))
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
            console.log("listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToConcreteEnvironmentMetaModelAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToConcreteEnvironmentMetaModelChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelChangeEvent
   *
   * data ConcreteEnvironmentMetaModelChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToConcreteEnvironmentMetaModelChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToConcreteEnvironmentMetaModelChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToConcreteEnvironmentMetaModelChangeEvent', payload))
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
            console.log("listenToConcreteEnvironmentMetaModelChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToConcreteEnvironmentMetaModelChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToConcreteEnvironmentMetaModelChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToConcreteEnvironmentMetaModelCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelCreateEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelCreateEvent
   *
   * data ConcreteEnvironmentMetaModelCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToConcreteEnvironmentMetaModelCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToConcreteEnvironmentMetaModelCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToConcreteEnvironmentMetaModelCreateEvent', payload))
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
            console.log("listenToConcreteEnvironmentMetaModelCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToConcreteEnvironmentMetaModelCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToConcreteEnvironmentMetaModelCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToConcreteEnvironmentMetaModelDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelDeleteEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelDeleteEvent
   *
   * data ConcreteEnvironmentMetaModelDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToConcreteEnvironmentMetaModelDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToConcreteEnvironmentMetaModelDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToConcreteEnvironmentMetaModelDeleteEvent', payload))
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
            console.log("listenToConcreteEnvironmentMetaModelDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToConcreteEnvironmentMetaModelDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToConcreteEnvironmentMetaModelDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToConcreteEnvironmentMetaModelStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ConcreteEnvironmentMetaModelStateChangeEvent
   * Example of a client listener for receiving the notification ConcreteEnvironmentMetaModelStateChangeEvent
   *
   * data ConcreteEnvironmentMetaModelStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToConcreteEnvironmentMetaModelStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToConcreteEnvironmentMetaModelStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToConcreteEnvironmentMetaModelStateChangeEvent', payload))
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
            console.log("listenToConcreteEnvironmentMetaModelStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToConcreteEnvironmentMetaModelStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToConcreteEnvironmentMetaModelStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProvisioningArtifactAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ProvisioningArtifactAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactAttributeValueChangeEvent
   *
   * data ProvisioningArtifactAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProvisioningArtifactAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProvisioningArtifactAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProvisioningArtifactAttributeValueChangeEvent', payload))
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
            console.log("listenToProvisioningArtifactAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProvisioningArtifactAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProvisioningArtifactAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProvisioningArtifactChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ProvisioningArtifactChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactChangeEvent
   *
   * data ProvisioningArtifactChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProvisioningArtifactChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProvisioningArtifactChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProvisioningArtifactChangeEvent', payload))
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
            console.log("listenToProvisioningArtifactChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProvisioningArtifactChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProvisioningArtifactChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProvisioningArtifactCreateEvent = function(req, res, next) {
  /**
   * Client listener for entity ProvisioningArtifactCreateEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactCreateEvent
   *
   * data ProvisioningArtifactCreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProvisioningArtifactCreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProvisioningArtifactCreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProvisioningArtifactCreateEvent', payload))
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
            console.log("listenToProvisioningArtifactCreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProvisioningArtifactCreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProvisioningArtifactCreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProvisioningArtifactDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity ProvisioningArtifactDeleteEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactDeleteEvent
   *
   * data ProvisioningArtifactDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProvisioningArtifactDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProvisioningArtifactDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProvisioningArtifactDeleteEvent', payload))
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
            console.log("listenToProvisioningArtifactDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProvisioningArtifactDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProvisioningArtifactDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToProvisioningArtifactStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity ProvisioningArtifactStateChangeEvent
   * Example of a client listener for receiving the notification ProvisioningArtifactStateChangeEvent
   *
   * data ProvisioningArtifactStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToProvisioningArtifactStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToProvisioningArtifactStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToProvisioningArtifactStateChangeEvent', payload))
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
            console.log("listenToProvisioningArtifactStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToProvisioningArtifactStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToProvisioningArtifactStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestResourceAPIAttributeValueChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestResourceAPIAttributeValueChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIAttributeValueChangeEvent
   *
   * data TestResourceAPIAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestResourceAPIAttributeValueChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestResourceAPIAttributeValueChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestResourceAPIAttributeValueChangeEvent', payload))
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
            console.log("listenToTestResourceAPIAttributeValueChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestResourceAPIAttributeValueChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestResourceAPIAttributeValueChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestResourceAPIChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestResourceAPIChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIChangeEvent
   *
   * data TestResourceAPIChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestResourceAPIChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestResourceAPIChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestResourceAPIChangeEvent', payload))
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
            console.log("listenToTestResourceAPIChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestResourceAPIChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestResourceAPIChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestResourceAPICreateEvent = function(req, res, next) {
  /**
   * Client listener for entity TestResourceAPICreateEvent
   * Example of a client listener for receiving the notification TestResourceAPICreateEvent
   *
   * data TestResourceAPICreateEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestResourceAPICreateEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestResourceAPICreateEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestResourceAPICreateEvent', payload))
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
            console.log("listenToTestResourceAPICreateEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestResourceAPICreateEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestResourceAPICreateEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestResourceAPIDeleteEvent = function(req, res, next) {
  /**
   * Client listener for entity TestResourceAPIDeleteEvent
   * Example of a client listener for receiving the notification TestResourceAPIDeleteEvent
   *
   * data TestResourceAPIDeleteEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestResourceAPIDeleteEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestResourceAPIDeleteEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestResourceAPIDeleteEvent', payload))
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
            console.log("listenToTestResourceAPIDeleteEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestResourceAPIDeleteEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestResourceAPIDeleteEvent: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToTestResourceAPIStateChangeEvent = function(req, res, next) {
  /**
   * Client listener for entity TestResourceAPIStateChangeEvent
   * Example of a client listener for receiving the notification TestResourceAPIStateChangeEvent
   *
   * data TestResourceAPIStateChangeEvent The event data
   * returns EventSubscription
   **/

  console.log('listenToTestResourceAPIStateChangeEvent :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToTestResourceAPIStateChangeEvent', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToTestResourceAPIStateChangeEvent', payload))
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
            console.log("listenToTestResourceAPIStateChangeEvent: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToTestResourceAPIStateChangeEvent: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToTestResourceAPIStateChangeEvent: error=" + error.toString());
      sendError(res, error);
    });



};



