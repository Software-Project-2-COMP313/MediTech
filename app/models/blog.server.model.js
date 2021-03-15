//Require mongoose to import the module
const mongoose = require('mongoose')

//Define the schema variable
const Schema = mongoose.Schema;

//Define the student schema
const BlogSchema = new Schema({
    title: String,
    description: String,

});

//Creates the students collection from the above mentioned schema
mongoose.model('Blog', BlogSchema)