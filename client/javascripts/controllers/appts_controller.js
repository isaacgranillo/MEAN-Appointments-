console.log('appts controller loaded')

appointmentsAppModule.controller('AppointmentsController', function(appointmentFactory){

	name = '';
	while(name =='' || name == undefined){
	var name = prompt('Enter Your Name');
	}
    	

	this.name = name;

	var self = this;

	this.addAppt = function(newAppt){

		if(newAppt){

		newAppt.name = this.name;
		appointmentFactory.addAppt(newAppt, function(){
			appointmentFactory.getAppointments(function(data){
				self.appointments = data;
				alert('Appointment Added!')
			})
		})

		this.newAppt = {};
		}

	}

	appointmentFactory.getAppointments(function(data){
		self.appointments = data;
	})

	this.removeAppt = function(apptID, apptName, apptDate){
		if(this.name == apptName){
		appointmentFactory.removeAppt(apptID, function(){
			appointmentFactory.getAppointments(function(data){
				self.appointments = data;
			})
		})

		}
		else{
			alert('You can only cancel your own appointment!')
		}
	}

})





