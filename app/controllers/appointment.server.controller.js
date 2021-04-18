//var Appointment = require('mongoose').model('Appointment');

exports.renderPhysicianPage = function(req, res, next) 
{
    res.render("physician");
};

exports.renderDentistPage = function(req, res, next) 
{
    res.render("dentist");
};

exports.renderAppointmentPage = function(req, res, next) 
{
    res.render("appointment");
};