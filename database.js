const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:'); 

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER
  )`);

  
  
});

module.exports = db;
