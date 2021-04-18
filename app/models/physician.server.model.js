//Require mongoose to import the module
const mongoose = require('mongoose')

//Define the schema variable
const Schema = mongoose.Schema;

//Define the student schema
const PhysicianSchema = new Schema({
    id: Number,
    password:String,
    designation:String,
    title:String,
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    gender:String,
    email: String,
    phone:String,
    age: Number,
    clinicAddress: String,
    practicingSince:String,
    specifications:String,
    languages:String,
    education:String,
    awards:String
});

//Creates the students collection from the above mentioned schema
mongoose.model('Physician', PhysicianSchema)