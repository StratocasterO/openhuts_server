var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

// http://localhost:3000/huts/new?name=&description=&temp=&wind=&rain=&lon=&lat=&rating=&user=
router.get('/new', function(req, res, next) {
	const name = req.query.name;
	const description = req.query.description;
	const temp = req.query.temp;
	const wind = req.query.wind;
	const rain = req.query.rain;
	const lon = req.query.lon;
	const lat = req.query.lat;
	const rating = req.query.rating;
	const user = req.query.user;
	// const img = req.query.img;
	
	database.query('INSERT INTO huts SET ?,?,?,?,?,?,?,?,?',[{name:name},{description:description},{wind:wind},{temp:temp},{rain:rain},{lon:lon},{lat:lat},{rating:rating},{user:user}], function(error,filas){
		if(error){            
			console.debug('Database inser error');
			return;
		};    
	});
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/huts/edit?name=&description=&temp=&wind=&rain=&lon=&lat=&rating=&id=
router.get('/edit', function(req, res, next) {
	const name = req.query.name;
	const description = req.query.description;
	const temp = req.query.temp;
	const wind = req.query.wind;
	const rain = req.query.rain;
	const lon = req.query.lon;
	const lat = req.query.lat;
	const rating = req.query.rating;
	
	database.query('UPDATE huts SET ?,?,?,?,?,?,?,? WHERE ?',[{name:name},{description:description},{wind:wind},{temp:temp},{rain:rain},{lon:lon},{lat:lat},{rating:rating},{id:id}], function(error,filas){
		if(error){            
			console.debug('Database update error');
			return;
		};    
	});
	res.writeHead(200);
	res.end();
});

// http://localhost:3000/huts/delete?id=
router.get('/delete', function(req, res, next) {
	const id = req.query.id;
	
	database.query('DELETE FROM huts WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.debug('Database delete error');
			return;
		};    
	});
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/huts/fetch
router.get('/fetch', function(req, res, next) {
	const id = req.query.id;
	
	database.query('SELECT * FROM huts', function(error,filas){
		if(error){            
			console.debug('Database select error');
			return;
		};
		
		res.send({"results":filas});
	});
});

module.exports = router;