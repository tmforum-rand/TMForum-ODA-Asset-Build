/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOfferingPrice
   * This operation creates a ProductOfferingPrice entity.
   *
   * productOfferingPrice ProductOfferingPriceCreate The ProductOfferingPrice to be created
   * returns ProductOfferingPrice
   **/
  const createProductOfferingPrice =  ( args, context /* productOfferingPrice  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingPrice";
        context.operationId  = "createProductOfferingPrice";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOfferingPrice: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOfferingPrice
   * This operation deletes a ProductOfferingPrice entity.
   *
   * id String Identifier of the ProductOfferingPrice
   * no response value expected for this operation
   **/
  const deleteProductOfferingPrice =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingPrice";
        context.operationId  = "deleteProductOfferingPrice";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOfferingPrice: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOfferingPrice objects
   * This operation list or find ProductOfferingPrice entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOfferingPrice =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingPrice";
        context.operationId  = "listProductOfferingPrice";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOfferingPrice: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductOfferingPrice
   * This operation updates partially a ProductOfferingPrice entity.
   *
   * id String Identifier of the ProductOfferingPrice
   * productOfferingPrice ProductOfferingPriceUpdate The ProductOfferingPrice to be updated
   * returns ProductOfferingPrice
   **/
  const patchProductOfferingPrice =  ( args, context /* idproductOfferingPrice  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingPrice";
        context.operationId  = "patchProductOfferingPrice";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductOfferingPrice: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOfferingPrice by ID
   * This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOfferingPrice
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOfferingPrice
   **/
  const retrieveProductOfferingPrice =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOfferingPrice";
        context.operationId  = "retrieveProductOfferingPrice";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOfferingPrice: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOfferingPrice,
  deleteProductOfferingPrice,
  listProductOfferingPrice,
  patchProductOfferingPrice,
  retrieveProductOfferingPrice,
};
