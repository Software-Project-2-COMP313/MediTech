module.exports = function (app) {
    app.get('/myProfile', function(req,res)
    {
        res.render('profile');
    });
}