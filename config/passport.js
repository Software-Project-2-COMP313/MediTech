// // Load the module dependencies
const passport = require('passport');
const mongoose = require('mongoose');

// Define the Passport configuration method
module.exports = function() {

	const Patient = mongoose.model('Patient');
	

	passport.serializeUser((patient, done) => {
		done(null, patient);
	});

	passport.deserializeUser((id, done) => {
		Patient.findOne({
			_id: id
		}, '-password -salt', (err, patient) => {
			done(err, patient);
		});
	});

	// Load Passport's strategies configuration files
	require('./strategies/local.js')();
	require('./strategies/twitter.js')();
	require('./strategies/facebook.js')();
	require('./strategies/google.js')();
};