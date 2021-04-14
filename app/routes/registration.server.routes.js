module.exports = function(app)
{
    var users =  require('../../app/controllers/signup.server.controller');
    const passport = require('passport');

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.createUser);

        app.route('/login')
        .get(users.renderSignin)
        .post(passport.authenticate('local', {
                successRedirect: '/blog',
                failureRedirect: '/login',
                failureFlash: true
        }));

        // Set up the Facebook OAuth routes 
        app.get('/oauth/facebook', passport.authenticate('facebook', {
            failureRedirect: '/signin'
        }));
        app.get('/oauth/facebook/callback', passport.authenticate('facebook', {
            failureRedirect: '/signin',
            successRedirect: '/'
        }));

        // Set up the Twitter OAuth routes 
        app.get('/oauth/twitter', passport.authenticate('twitter', {
            failureRedirect: '/signin'
        }));
        app.get('/oauth/twitter/callback', passport.authenticate('twitter', {
            failureRedirect: '/signin',
            successRedirect: '/'
        }));

        // Set up the Google OAuth routes 
        app.get('/oauth/google', passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ],
            failureRedirect: '/signin'
        }));
        app.get('/oauth/google/callback', passport.authenticate('google', {
            failureRedirect: '/signin',
            successRedirect: '/'
        }));

        // Set up the 'signout' route
        app.get('/signout', users.signout);
};