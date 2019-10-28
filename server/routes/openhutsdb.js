var mysql = require('mysql');

//  mysql://bd9fdeeb519896:9e198052@eu-cdbr-west-02.cleardb.net/heroku_5e50e45fde7f817?reconnect=true

var conexion = mysql.createConnection({
    host:'pablomonteserin.com',
    user:'openhuts',
    password:'Kl0xxY0c',
    database:'openhuts'
});

conexion.connect(function (error){
    if (error)
        console.log('Error de conexión con la base de datos');
    else
        console.log('Conexión con la base de datos establecida');
});

module.exports=conexion;