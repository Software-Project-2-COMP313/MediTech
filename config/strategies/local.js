// Load the module dependencies
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Patient = require('mongoose').model('Patient');

// Create the Local strategy configuration method
module.exports = function() {
	// Use the Passport's Local strategy 
	passport.use(new LocalStrategy({
		usernameField: 'email',
		passwordField : 'password'
	  },
	  function(username, password, done){
		// Use the 'User' model 'findOne' method to find a user with the current username
		Patient.findOne({
			email: username
		}, (err, patient) => {
			// If an error occurs continue to the next middleware
			if (err) {
				return done(err);
			}
			
			// If a user was not found, continue to the next middleware with an error message
			if (!patient) {
				return done(null, false, {
					message: 'Unknown patient'
				});
			}

			// If the passport is incorrect, continue to the next middleware with an error message
			if (!patient.authenticate(password)) {
				return done(null, false, {
					message: 'Invalid password'
				});
			}
			
			// Otherwise, continue to the next middleware with the user object
			return done(null, patient);
		});
	}));
};