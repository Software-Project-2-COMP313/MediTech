module.exports = function (app) {
    app.get('/prescreening', function(req,res)
    {
        res.render('prescreening');
    });
}