var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

// http://localhost:3000/users/new?name=&email=
router.get('/new', function(req, res, next) {
	const name = req.query.name;
	const email = req.query.email;
	
	database.query('INSERT INTO huts SET ?,?',[{name:name},{email:email}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha añadido un usuario a la base de datos");
	res.writeHead(200);
	res.end(); 
});

// http://localhost:3000/huts/edit?name=&description=&location=&id=
router.get('/edit', function(req, res, next) {
	const name = req.query.name;
	const description = req.query.description;
	const location = req.query.location;
	const id = req.query.id;
	
	database.query('UPDATE huts SET ?,?,? WHERE ?',[{name:name},{description:description},{location:location},{id:id}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha modificado un usuario de la base de datos");
	res.writeHead(200);
	res.end();
});

// TODO Profile image change

// http://localhost:3000/users/fetch?id=
router.get('/fetch', function(req, res, next) {
	const id = req.query.id;
	
	database.query('SELECT * FROM users WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};    
		
		filas = JSON.stringify(filas);
		
		res.writeHead(200);
		res.write(filas);
		res.end(); 
	});
	console.log("Se ha consultado un usuario de la base de datos");
});

// http://localhost:3000/users/login
router.post('/login'), function(req, res, next){
	const username = req.body.user;
	const password = req.body.pass;
	
	database.query('SELECT * FROM users WHERE ?',{user:username}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};
		
		if(filas.user == user && filas.pass == pass){
			// const idRecuperadaDeLaBaseDeDatos = 1;
			// const token = jwt.sign({idRecuperadaDeLaBaseDeDatos}, SECRET);
			// res.send({token});
			res.send("logged");
		} else{
			res.send({codigo: 403});
		}
	}
}

// http://localhost:3000/users/delete?id=
router.get('/delete'), function(req, res, next){
	const id = req.query.id;
	
	database.query('DELETE FROM users WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.log('Se ha producido un error al escribir en la base de datos');
			return;
		};    
	});
	console.log("Se ha borrado un usuario de la base de datos");
	res.writeHead(200);
	res.end(); 
}

// http://localhost:3000/users/password?id=
// TODO send email (https://www.w3schools.com/nodejs/nodejs_email.asp)


module.exports = router;