var Blog = require('mongoose').model('Blog');

exports.createBlog = function(req, res, next) 
{
    var blog = new Blog(req.body);
    blog.save(function(err)
    {
        if(err)
        {
            return next(err);
        }
        else
        {
            res.render('bloghome');
        }
    });
};