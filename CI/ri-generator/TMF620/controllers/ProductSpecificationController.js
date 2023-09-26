/**
 * The ProductSpecificationController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProductSpecificationService');
const createProductSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProductSpecification);
};

const deleteProductSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteProductSpecification);
};

const listProductSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.listProductSpecification);
};

const patchProductSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchProductSpecification);
};

const retrieveProductSpecification = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveProductSpecification);
};


module.exports = {
  createProductSpecification,
  deleteProductSpecification,
  listProductSpecification,
  patchProductSpecification,
  retrieveProductSpecification,
};
