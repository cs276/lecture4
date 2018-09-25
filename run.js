const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('YouTunes.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        throw err;
    }
});

db.run('INSERT INTO Artist (Name) VALUES(?)', ['Brian Yu'], (err) => {
    if (err) {
        throw err;
    }
});
