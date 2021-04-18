module.exports = function(app)
{
    var users =  require('../../app/controllers/signup.server.controller');
    const passport = require('passport');

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.createUser);

        app.route('/login')
        .get(users.renderSignin)
        .post(users.signin);

        // Set up the 'signout' route
        app.get('/signout', users.signout);
};