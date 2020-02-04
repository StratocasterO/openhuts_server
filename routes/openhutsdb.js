var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'ohdatabase.c1bcj6q0pxm2.eu-west-3.rds.amazonaws.com',
    user:'admin',
    password:'gotonature!',
    database:'openhuts'
});

conexion.connect(function (error){
    if (error)
        console.debug('Database connection failed');
});

module.exports=conexion;
