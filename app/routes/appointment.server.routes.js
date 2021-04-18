module.exports = function(app)
{
    var appointment = require('../controllers/appointment.server.controller');
    
    app.get('/physicians', appointment.renderPhysicianPage);

    app.get('/dentist', appointment.renderDentistPage);

    app.get('/appointment',appointment.renderAppointmentPage);
};
