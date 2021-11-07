const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'login'
});

db.connect((err, result) => {
  if(err) throw err;

  return;
});

module.exports = db;