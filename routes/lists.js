var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

// http://localhost:3000/lists/new?user=&name=
router.get('/new', function(req, res, next) {
	const name = req.query.name;
	const user = req.query.user;
		
	database.query('INSERT INTO lists SET ?,?',[{user:user},{name:name}], function(error,filas){
		if(error){            
			console.debug('Database insert error');
			return;
		};    
	});
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/lists/add?list=&hut=
router.get('/add', function(req, res, next) {
	const list = req.query.list;
	const hut = req.query.hut;
	
	database.query('INSERT lists-huts SET ?,?',[{list:list},{hut:hut}], function(error,filas){
		if(error){            
			console.debug('Database insert error');
			return;
		};    
	});
	res.writeHead(200);
	res.end();
});

// http://localhost:3000/lists/delete?id=
router.get('/delete', function(req, res, next) {
	const id = req.query.id;

	database.query('DELETE FROM lists WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.debug('Database delete error');
			return;
		};    
	});
	res.writeHead(200);
	res.end();  
});

// http://localhost:3000/lists/deletehut?id=
router.get('/deletehut', function(req, res, next) {
	const id = req.query.id;

	database.query('DELETE FROM lists-huts WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.debug('Database delete error');
			return;
		};    
	});
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/lists/fetch?id=
router.get('/fetch', function(req, res, next) {
	const id = req.query.id;
	
	database.query('SELECT * FROM lists WHERE ?',{user:id}, function(error,filas){
		if(error){            
			console.debug('Databasse select error');
			return;
		};    

		res.send({"results":filas});
	});
});

// http://localhost:3000/lists/fetchhuts?id=
router.get('/fetchhuts', function(req, res, next) {
	const id = req.query.id;
	
	database.query('SELECT * FROM huts WHERE id IN (SELECT hut FROM `lists-huts` WHERE ?)',{list:id}, function(error,filas){
		if(error){            
			console.debug('Databasse select error');
			return;
		};    

		res.send({"results":filas});
	});	
});

module.exports = router;