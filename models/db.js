var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    database : 'blog',
    user : 'root',
    password : 'Upd@t1ng'
});

connection.connect();
module.exports = connection;

