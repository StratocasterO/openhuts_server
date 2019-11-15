var express = require('express');
var router = express.Router();
var database = require('./openhutsdb');

// TODO Profile image change

// http://localhost:3000/users/login
router.post('/login', function(req, res, next){
	const username = req.body.name;
	const password = req.body.pass;
	
	const sql = database.query('SELECT * FROM users WHERE ? AND ?',[{email:username},{pass:password}], function(error,filas){
		if(error){            
			console.debug('Database select error');
			return;
		};
		
		console.log(sql.sql);
		if(filas.length > 0){
			console.debug("User logged")
			// const idRecuperadaDeLaBaseDeDatos = 1;
			// const token = jwt.sign({idRecuperadaDeLaBaseDeDatos}, SECRET);
			// res.send({token});
			res.send({log:"logged", user:filas[0]});
		} else{
			console.debug("Login failed")
			res.send({code: 403});
		}
	})
});

// http://localhost:3000/users/register
router.post('/register', function(req, res, next){
	console.log(req.body);
	const email = req.body.email;
	const username = req.body.user;
	const password = req.body.pass;
	
	console.log(username,password);
	
	database.query('INSERT INTO users (email, name, pass) VALUES (?)',[[email,username,password]], function(error,filas){
		if(error){            
			console.debug('Database insert error1', error);
			return;
		};
		
		sql = database.query('SELECT * FROM users WHERE ? AND ?',[{email:email},{pass:password}], function(error,filas2){
			if(error){            
				console.debug('Database select error', error);
				return;
			};
			
			user = filas2[0];
		});

		console.log(sql.sql);
		
		database.query('INSERT INTO lists (user, name) VALUES ?',[filas2.id,"fav"], function(error,filas3){
			if(error){            
				console.debug('Database insert error', error);
				return;
			};
		});
	})
	
	
	res.send({log:"logged", user:user});
});

// http://localhost:3000/users/update
router.post('/update', function(req, res, next){
	const id = req.body.id
	const username = req.body.name;
	const password = req.body.pass;
	const mail = req.body.mail
	const desc = req.body.desc
	const loc = req.body.loc
	const img = req.body.img
	
	const sql = database.query('UPDATE users SET ?,?,?,?,? AND ? WHERE ?',[{email:mail},{pass:password}, {name:username},{description:desc},{location:loc},{img:img},{id:id}], function(error,filas){
		if(error){            
			console.debug('Database select error');
			return;
		};
		
		console.log(sql.sql);
		if(filas.length > 0){
			console.debug("User logged")
			// const idRecuperadaDeLaBaseDeDatos = 1;
			// const token = jwt.sign({idRecuperadaDeLaBaseDeDatos}, SECRET);
			// res.send({token});
			res.send({log:"logged", user:filas[0]});
		} else{
			console.debug("Login failed")
			res.send({code: 403});
		}
	})
});

// http://localhost:3000/users/delete?id=
router.get('/delete'), function(req, res, next){
	const id = req.query.id;
	
	database.query('DELETE FROM users WHERE ?',{id:id}, function(error,filas){
		if(error){            
			console.debug('Database delete error');
			return;
		};    
	});
	res.send("deleted");
}

// http://localhost:3000/users/password?id=
// TODO send email (https://www.w3schools.com/nodejs/nodejs_email.asp)

module.exports = router;