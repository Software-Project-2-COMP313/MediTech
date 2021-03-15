var Patient = require('mongoose').model('Patient');
var Physician = require('mongoose').model('Physician');
const passport = require('passport');

exports.createUser = function(req,res,next)
{
   var designation = req.body.designation;
   if(designation == 'Patient')
   {
       var patient = new Patient(req.body);
       const message = null;
       patient.provider = 'local';
       patient.save(function(err)
       {
           if(err)
           {
            const message = getErrorMessage(err);
            console.log(err)
            req.flash('error', message);
            return res.redirect('/signup');
           }
           else
           {
            req.login(patient, (err) => {
				// If a login error occurs move to the next middleware
				if (err) return next(err);

				// Redirect the user back to the main application page
				return res.redirect('/');
			});
           }
       });
   }
   else if(designation == 'Physician')
   {
       var physician = new Physician(req.body);
       physician.save(function(err)
       {
           if(err)
           {
               return next(err);
           }
           else
           {
               res.render('homepage');
           }
       })
   }
   else
   {
       res.render('signup');
   }
};

const getErrorMessage = function(err) {
	// Define the error message variable
	var message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	return message;
};

exports.renderSignin = function(req, res, next) {
	if (!req.patient) {
		res.render('login', {

			title: 'Sign-in Form',
			messages: req.flash('error') || req.flash('info')
		});
	} 
    else {
		return res.redirect('/');
	}
};

exports.renderSignup = function(req, res, next) {
	if (!req.patient) {
		res.render('signup', {
			title: 'Sign-up Form',
			badmessage: req.flash('error')
		});
	} else 
    {
		return res.redirect('/');
	}
};

exports.saveOAuthUserProfile = function(req, profile, done) {
	Patient.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, (err, patient) => {
		if (err) {
			return done(err);
		} else {
			if (!user) {
				const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

				User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
					// Set the available user name 
					profile.username = availableUsername;
					
					// Create the user
					patient = new Patient(profile);

					// Try saving the new user document
					patient.save(function(err) {
						// Continue to the next middleware
						return done(err, patient);
					});
				});
			} else {
				// Continue to the next middleware
				return done(err, patient);
			}
		}
	});
};

// Create a new controller method for signing out
exports.signout = function(req, res) {
	// Use the Passport 'logout' method to logout
	req.logout();

	// Redirect the user back to the main application page
	res.redirect('/');
};