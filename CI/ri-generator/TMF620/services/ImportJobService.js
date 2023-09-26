/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a ImportJob
   * This operation creates a ImportJob entity.
   *
   * importJob ImportJobCreate The ImportJob to be created
   * returns ImportJob
   **/
  const createImportJob =  ( args, context /* importJob  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ImportJob";
        context.operationId  = "createImportJob";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createImportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a ImportJob
   * This operation deletes a ImportJob entity.
   *
   * id String Identifier of the ImportJob
   * no response value expected for this operation
   **/
  const deleteImportJob =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ImportJob";
        context.operationId  = "deleteImportJob";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteImportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find ImportJob objects
   * This operation list or find ImportJob entities
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listImportJob =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ImportJob";
        context.operationId  = "listImportJob";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listImportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a ImportJob by ID
   * This operation retrieves a ImportJob entity. Attribute selection is enabled for all first level attributes.
   *
   * id String Identifier of the ImportJob
   * fields String Comma-separated properties to provide in response (optional)
   * returns ImportJob
   **/
  const retrieveImportJob =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "ImportJob";
        context.operationId  = "retrieveImportJob";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveImportJob: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createImportJob,
  deleteImportJob,
  listImportJob,
  retrieveImportJob,
};
