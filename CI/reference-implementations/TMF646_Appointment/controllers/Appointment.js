'use strict';

var url = require('url');

var Appointment = require('../service/AppointmentService');

module.exports.createAppointment = function createAppointment (req, res, next) {
  Appointment.createAppointment(req, res, next);
};

module.exports.deleteAppointment = function deleteAppointment (req, res, next) {
  Appointment.deleteAppointment(req, res, next);
};

module.exports.listAppointment = function listAppointment (req, res, next) {
  Appointment.listAppointment(req, res, next);
};

module.exports.patchAppointment = function patchAppointment (req, res, next) {
  Appointment.patchAppointment(req, res, next);
};

module.exports.retrieveAppointment = function retrieveAppointment (req, res, next) {
  Appointment.retrieveAppointment(req, res, next);
};
