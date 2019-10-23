var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

// http://localhost:3000/lists/new?user=&name=
router.get('/new', function(req, res, next) {
	const name = req.query.name;
	const user = req.query.user;
		
	database.query('INSERT INTO lists SET ?,?',[{user:user},{name:name}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido una lista a la base de datos");
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/lists/add?list=&hut=
router.get('/add', function(req, res, next) {
	const list = req.query.list;
	const hut = req.query.hut;
	
	database.query('INSERT lists-huts SET ?,?',[{list:list},{hut:hut}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido un refugio una lista de la base de datos");
	res.writeHead(200);
	res.end();
});

// http://localhost:3000/lists/delete?id=
router.get('/delete', function(req, res, next) {
	const id = req.query.id;

	database.query('DELETE FROM lists-huts WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha borrado un refugio de una lista de la base de datos");
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/lists/fetch
router.get('/fetch', function(req, res, next) {
	const id = req.query.id;
	
	database.query('SELECT id, list, hut FROM lists-huts', function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};    
		
		res.send({"results":filas});
	});
	console.log("Se ha consultado un refugio de la base de datos");
});

module.exports = router;