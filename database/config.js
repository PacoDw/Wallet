const mysql = require('mysql');

let db = mysql.createConnection({
    host        : process.env.DB_HOST,
    user        : process.env.DB_USER,
    password    : process.env.DB_PASS,
    database    : process.env.DB_NAME,
    dateStrings : true
});

db.connect( err =>{
    if( err ) { 
        console.log('Hubo error en la conexíon.');
        throw err;  
    }
    else 
        console.log('Está conectado!')
});

module.exports = db;