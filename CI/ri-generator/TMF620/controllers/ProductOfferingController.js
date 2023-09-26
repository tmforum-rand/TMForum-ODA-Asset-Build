/**
 * The ProductOfferingController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductOfferingService');
const createProductOffering = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductOffering);
};

const deleteProductOffering = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductOffering);
};

const listProductOffering = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductOffering);
};

const patchProductOffering = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductOffering);
};

const retrieveProductOffering = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductOffering);
};


module.exports = {
  createProductOffering,
  deleteProductOffering,
  listProductOffering,
  patchProductOffering,
  retrieveProductOffering,
};
