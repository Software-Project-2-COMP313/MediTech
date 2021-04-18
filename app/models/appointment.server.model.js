//Require mongoose to import the module
const mongoose = require("mongoose");

//Define the schema variable
const Schema = mongoose.Schema;

//Define the student schema
const AppointmentSchema = new Schema({
  physicianName: String,
  appointmentTime: String,
});

//Creates the students collection from the above mentioned schema
mongoose.model("Blog", AppointmentSchema);
