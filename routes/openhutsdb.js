var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: process.env.DB_HOST || 'pablomonteserin.com',
    user: process.env.DB_USER || 'openhuts',
    password: process.env.DB_PASSWORD || 'Kl0xxY0c',
    database: 'openhuts'
});

conexion.connect(function (error){
    if (error)
        console.log('Error de conexión con la base de datos');
    else
        console.log('Conexión con la base de datos establecida');
});

module.exports=conexion;
