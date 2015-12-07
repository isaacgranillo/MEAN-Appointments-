console.log('appointment factory loaded')

appointmentsAppModule.factory('appointmentFactory', function($http, $location){
	var factory = {};

	factory.addAppt = function(newAppt, callback){
		$http.post('/addappt', newAppt).success(function(output){
			$location.path('/appointments')
			callback();
		})
	}

	factory.getAppointments = function(callback){
		$http.get('/allappts').success(function(output){
			callback(output)
		})
	}

	factory.removeAppt = function(apptID, callback){
		$http.delete('/appts/' + apptID).success(function(output){
			callback();
		})
	}

	return factory
})