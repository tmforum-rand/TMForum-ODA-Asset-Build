/**
 * The ExportJobController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ExportJobService');
const createExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.createExportJob);
};

const deleteExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteExportJob);
};

const listExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.listExportJob);
};

const retrieveExportJob = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveExportJob);
};


module.exports = {
  createExportJob,
  deleteExportJob,
  listExportJob,
  retrieveExportJob,
};
