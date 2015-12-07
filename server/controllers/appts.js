var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');


module.exports = (function(){
	return {
		add: function(req, res){
			var appointment = new Appointment(req.body);
			appointment.save(function(err){
				if(err){
					console.log('NOT POSTED');
				}
				else{
					console.log('POSTED');
					res.json(true)
				}
			}) 
		},

		show: function(req, res){
			Appointment.find({}, function(err, results){
				if(err){
					console.log(err);
				}
				else{
					res.json(results)

				}
			})
		},

		remove: function(req, res){
			Appointment.remove({_id: req.params.id}, function(err){
				if(err){
					console.log('REMOVE NOT SUCCESSFUL')
				}
				else{
					console.log('REMOVED')
					res.json({})
				}
			})
		},

	}	

	
})();