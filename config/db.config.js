const mysql = require('mysql');

const mysqlpool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdata'
})

module.exports = mysqlpool