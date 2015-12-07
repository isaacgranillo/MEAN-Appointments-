var appts = require('./../controllers/appts.js');

module.exports = function(app){

	app.post('/addappt', function(req, res){
		appts.add(req, res);
	})

	app.get('/allappts', function(req, res){
		appts.show(req, res);
	})

	app.delete('/appts/:id', function(req, res){
		appts.remove(req, res);
	})

}