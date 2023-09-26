/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity CatalogBatchEvent
   * Example of a client listener for receiving the notification CatalogBatchEvent
   *
   * data CatalogBatchEvent The event data
   * returns EventSubscription
   **/
  const listenToCatalogBatchEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCatalogBatchEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCatalogBatchEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CatalogCreateEvent
   * Example of a client listener for receiving the notification CatalogCreateEvent
   *
   * data CatalogCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCatalogCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCatalogCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCatalogCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CatalogDeleteEvent
   * Example of a client listener for receiving the notification CatalogDeleteEvent
   *
   * data CatalogDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToCatalogDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCatalogDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCatalogDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryCreateEvent
   * Example of a client listener for receiving the notification CategoryCreateEvent
   *
   * data CategoryCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToCategoryCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCategoryCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCategoryCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity CategoryDeleteEvent
   * Example of a client listener for receiving the notification CategoryDeleteEvent
   *
   * data CategoryDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToCategoryDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToCategoryDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToCategoryDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
   *
   * data ProductOfferingAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingCreateEvent
   *
   * data ProductOfferingCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingDeleteEvent
   *
   * data ProductOfferingDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
   *
   * data ProductOfferingPriceAttributeValueChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingPriceAttributeValueChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingPriceAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingPriceAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceCreateEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
   *
   * data ProductOfferingPriceCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingPriceCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingPriceCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingPriceCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceDeleteEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
   *
   * data ProductOfferingPriceDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingPriceDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingPriceDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingPriceDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingPriceStateChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
   *
   * data ProductOfferingPriceStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingPriceStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingPriceStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingPriceStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductOfferingStateChangeEvent
   * Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
   *
   * data ProductOfferingStateChangeEvent The event data
   * returns EventSubscription
   **/
  const listenToProductOfferingStateChangeEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductOfferingStateChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductOfferingStateChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationCreateEvent
   * Example of a client listener for receiving the notification ProductSpecificationCreateEvent
   *
   * data ProductSpecificationCreateEvent The event data
   * returns EventSubscription
   **/
  const listenToProductSpecificationCreateEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity ProductSpecificationDeleteEvent
   * Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
   *
   * data ProductSpecificationDeleteEvent The event data
   * returns EventSubscription
   **/
  const listenToProductSpecificationDeleteEvent =  ( args, context /* data  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListenersClientSide";
        context.operationId  = "listenToProductSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listenToProductSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  listenToCatalogBatchEvent,
  listenToCatalogCreateEvent,
  listenToCatalogDeleteEvent,
  listenToCategoryCreateEvent,
  listenToCategoryDeleteEvent,
  listenToProductOfferingAttributeValueChangeEvent,
  listenToProductOfferingCreateEvent,
  listenToProductOfferingDeleteEvent,
  listenToProductOfferingPriceAttributeValueChangeEvent,
  listenToProductOfferingPriceCreateEvent,
  listenToProductOfferingPriceDeleteEvent,
  listenToProductOfferingPriceStateChangeEvent,
  listenToProductOfferingStateChangeEvent,
  listenToProductSpecificationCreateEvent,
  listenToProductSpecificationDeleteEvent,
};
