const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('YouTunes.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        throw err;
    }
});

db.each('SELECT * FROM Artist LIMIT 10', [], (err, row) => {
    console.log(row.Name);
});
