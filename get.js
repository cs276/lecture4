const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('YouTunes.db', sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        throw err;
    }
});

db.get('SELECT * FROM Artist WHERE ArtistId = 100', [], (err, row) => {
    if (err) {
        throw err;
    }
    console.log(row.Name);
});
