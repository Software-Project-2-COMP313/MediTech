const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

//Define the student schema
const PatientSchema = new Schema({
    id: Number,
    password:String,
    title:String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender:String,
    email: String,
    phone:String,
    age: Number,
    homeAddress: String,
    sickness:String,
    allergies: String,
    specialReqs:String,
    prescriptions:String,
    salt: {
		type: String
    },
    provider: {
		type: String,
		required: 'Provider is required'
	},
	providerId: String,
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}
});

// Set the 'fullname' virtual property
PatientSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
	const splitName = fullName.split(' ');
	this.firstName = splitName[0] || '';
	this.lastName = splitName[1] || '';
});

// Use a pre-save middleware to hash the password
PatientSchema.pre('save', function (next) {
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);

	}
	next();
});

// Create an instance method for hashing a password
PatientSchema.methods.hashPassword = function (password) {
    //console.log(crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex'))
    return crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');

};

// Create an instance method for authenticating user
PatientSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

// Find possible not used username
PatientSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	// Add a 'username' suffix
	const possibleUsername = username + (suffix || '');

	// Use the 'User' model 'findOne' method to find an available unique username
	this.findOne({
		username: possibleUsername
	}, (err, patient) => {
		// If an error occurs call the callback with a null value, otherwise find find an available unique username
		if (!err) {
			// If an available unique username was found call the callback method, otherwise call the 'findUniqueUsername' method again with a new suffix
			if (!patient) {
				callback(possibleUsername);
			} else {
				return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
			}
		} else {
			callback(null);
		}
	});
};

// Configure the 'UserSchema' to use getters and virtuals when transforming to JSON
PatientSchema.set('toJSON', {
	getters: true,
	virtuals: true
});

mongoose.model('Patient', PatientSchema)