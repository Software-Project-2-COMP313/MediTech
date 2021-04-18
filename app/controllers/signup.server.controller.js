var Patient = require('mongoose').model('Patient');
var Physician = require('mongoose').model('Physician');
const passport = require('passport');

exports.createUser = function(req,res,next)
{
   var designation = req.body.designation;
   console.log(designation);
   if(designation == 'Patient')
   {
	console.log("Entered the patient part of the code");
	if (!req.user) 
	{
		Patient.findOne(
		  {
			email: req.body.email, //using the email instead of id
		  },
		  (err, patient) => 
		  {
			if (patient == null) 
			{
			  var newPatient = new Patient(req.body);
			  console.log(newPatient);
			  newPatient.save();
			  return res.redirect("/index");
			} else 
			{
			  res.render("signup", {message:"The userID already exists."});
			}
		  }
		);
	  } 
	  else 
	  {
		return res.redirect("/index");
	  }
   }
   else if(designation == 'Physician')
   {
	console.log("Entered the phsyician part of the code");
	if (!req.user) 
	{
		Physician.findOne(
		  {
			email: req.body.email, //using the email instead of id
		  },
		  (err, physician) => {
			if (physician == null) 
			{
			  var newPhysician = new Physician(req.body);
			  console.log(newPhysician);
			  newPhysician.save();
			  return res.redirect("/index");
			} else {
			  res.render("signup", {message:"The userID already exists."});
			}
		  }
		);
	  } else {
		return res.redirect("/index");
	  }
   }
   else
   {
       res.render('signup');
   }
};

exports.renderSignup = function(req,res,next)
{
	res.render("signup");
};

exports.renderSignin = function(req,res,next)
{
	res.render("login");
};

exports.signout = function(req,res,next)
{
	req.session.destroy(function (err) {
		if (err) {
		  console.log(err);
		} else {
		  res.redirect("/");
		}
	  });
};

exports.signin = function (req, res, next) 
{
	console.log(req.body.email);
	res.render("index");
};