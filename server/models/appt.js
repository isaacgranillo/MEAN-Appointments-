var mongoose = require('mongoose');
var path = require('path');
var Schema = mongoose.Schema;
var AppointmentSchema = new mongoose.Schema({
	date: Date,
	time: String,
	name: String,
	complaint: String,
	created: {type: Date, default: Date.now}
});

AppointmentSchema.path('date').required(true);
AppointmentSchema.path('time').required(true);
AppointmentSchema.path('name').required(true);
AppointmentSchema.path('complaint').required(true);

var Appointment = mongoose.model('Appointment', AppointmentSchema);