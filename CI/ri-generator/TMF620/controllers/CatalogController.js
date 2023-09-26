/**
 * The CatalogController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/CatalogService');
const createCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createCatalog);
};

const deleteCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteCatalog);
};

const listCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.listCatalog);
};

const patchCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchCatalog);
};

const retrieveCatalog = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveCatalog);
};


module.exports = {
  createCatalog,
  deleteCatalog,
  listCatalog,
  patchCatalog,
  retrieveCatalog,
};
