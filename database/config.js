const mysql = require('mysql');

let db = mysql.createConnection({
    host        : '192.168.0.203',
    user        : 'Admin',
    password    : '301198050913',
    database    : 'wallet',
    // port        : 3305,
    dateStrings : true
});

db.connect((err)=>{
    if(err){
        console.log('Hubo error en la conexíon.');
        throw err;  
    } else {
        console.log('Está conectado!')
    }
})

module.exports = db;