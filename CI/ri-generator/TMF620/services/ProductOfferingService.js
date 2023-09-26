/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ProductOffering
   * This operation creates a ProductOffering entity.
   *
   * productOffering ProductOfferingCreate The ProductOffering to be created
   * returns ProductOffering
   **/
  const createProductOffering =  ( args, context /* productOffering  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOffering";
        context.operationId  = "createProductOffering";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createProductOffering: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ProductOffering
   * This operation deletes a ProductOffering entity.
   *
   * id String Identifier of the ProductOffering
   * no response value expected for this operation
   **/
  const deleteProductOffering =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOffering";
        context.operationId  = "deleteProductOffering";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteProductOffering: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ProductOffering objects
   * This operation list or find ProductOffering entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listProductOffering =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOffering";
        context.operationId  = "listProductOffering";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listProductOffering: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a ProductOffering
   * This operation updates partially a ProductOffering entity.
   *
   * id String Identifier of the ProductOffering
   * productOffering ProductOfferingUpdate The ProductOffering to be updated
   * returns ProductOffering
   **/
  const patchProductOffering =  ( args, context /* idproductOffering  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOffering";
        context.operationId  = "patchProductOffering";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchProductOffering: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ProductOffering by ID
   * This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ProductOffering
   * fields String Comma-separated properties to provide in response (optional)
   * returns ProductOffering
   **/
  const retrieveProductOffering =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ProductOffering";
        context.operationId  = "retrieveProductOffering";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveProductOffering: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createProductOffering,
  deleteProductOffering,
  listProductOffering,
  patchProductOffering,
  retrieveProductOffering,
};
