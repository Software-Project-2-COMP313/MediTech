module.exports = function (app) 
{
    app.get('/myProfile', function(req,res)
    {
        res.render('profile');
    });

    app.get('/profile', function(req,res)
    {
        res.render('profile');
    }); 
}