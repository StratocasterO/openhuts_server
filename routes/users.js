var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

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
router.post('/login', function(req, res, next){
	console.log(req.body);
	const username = req.body.name;
	const password = req.body.pass;
	
	const sql = database.query('SELECT * FROM users WHERE ? AND ?',[{email:username},{pass:password}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};
		
		console.log(sql.sql) // Muestra la petición SQL
		if(filas.length > 0){
			console.log("Petición de login exitosa")
			// const idRecuperadaDeLaBaseDeDatos = 1;
			// const token = jwt.sign({idRecuperadaDeLaBaseDeDatos}, SECRET);
			// res.send({token});
			res.send("logged");
		} else{
			console.log("Petición de login fallida")
			res.send({codigo: 403});
		}
	})
});

// http://localhost:3000/users/login
router.post('/register', function(req, res, next){
	Console.log(req.body);
	const email = req.body.email;
	const username = req.body.user;
	const password = req.body.pass;
	
	database.query('INSERT INTO users WHERE ?,? AND ?',[{email:email},{user:username},{pass:password}], function(error,filas){
		if(error){            
			console.log('Se ha producido un error al leer la base de datos');
			return;
		};
		
		if(filas.length > 0){
			// const idRecuperadaDeLaBaseDeDatos = 1;
			// const token = jwt.sign({idRecuperadaDeLaBaseDeDatos}, SECRET);
			// res.send({token});

			database.query('INSERT INTO lists WHERE ? AND ?',[{user:filas.id},{name:"Favorites"}], function(error,filas2){
				if(error){            
					console.log('Se ha producido un error al leer la base de datos');
					return;
				};
				console.log('Se ha añadido la lista Favoritos a la base de datos');
			})

			res.send("registered");
		} else{
			res.send({codigo: 403});
		}
	})
});

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
	res.send("deleted");

}

// http://localhost:3000/users/password?id=
// TODO send email (https://www.w3schools.com/nodejs/nodejs_email.asp)


module.exports = router;