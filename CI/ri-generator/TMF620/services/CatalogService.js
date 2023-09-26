/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Catalog
   * This operation creates a Catalog entity.
   *
   * catalog CatalogCreate The Catalog to be created
   * returns Catalog
   **/
  const createCatalog =  ( args, context /* catalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Catalog";
        context.operationId  = "createCatalog";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Catalog
   * This operation deletes a Catalog entity.
   *
   * id String Identifier of the Catalog
   * no response value expected for this operation
   **/
  const deleteCatalog =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Catalog";
        context.operationId  = "deleteCatalog";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Catalog objects
   * This operation list or find Catalog entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listCatalog =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Catalog";
        context.operationId  = "listCatalog";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Catalog
   * This operation updates partially a Catalog entity.
   *
   * id String Identifier of the Catalog
   * catalog CatalogUpdate The Catalog to be updated
   * returns Catalog
   **/
  const patchCatalog =  ( args, context /* idcatalog  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Catalog";
        context.operationId  = "patchCatalog";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Catalog by ID
   * This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the Catalog
   * fields String Comma-separated properties to provide in response (optional)
   * returns Catalog
   **/
  const retrieveCatalog =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Catalog";
        context.operationId  = "retrieveCatalog";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveCatalog: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createCatalog,
  deleteCatalog,
  listCatalog,
  patchCatalog,
  retrieveCatalog,
};
