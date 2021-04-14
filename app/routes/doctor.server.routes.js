module.exports = function(app)
{
    var doctors = require('../../app/controllers/doctor.server.controller');

    app.get("/doctors", function(req,res,next){
        res.render('doctors');
    });
};