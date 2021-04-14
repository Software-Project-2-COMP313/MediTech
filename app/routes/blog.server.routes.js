module.exports = function(app)
{
    var blogs = require('../controllers/blog.server.controller');
    
    app.get('/blog', function(req,res)
    {
        res.render('blog');
    });
};