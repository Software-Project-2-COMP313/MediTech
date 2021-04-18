const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');

//Define the student schema
const PatientSchema = new Schema({
    id: Number,
    designation:String,
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
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('Patient', PatientSchema)