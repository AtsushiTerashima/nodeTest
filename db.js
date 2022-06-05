let pg = require('pg');

let dbConfig = new pg.Pool({
    database: 'chat_db',
    user: 'curomo', // 変更してたらここ変えないとエラーでる
    password: '', // 設定していたら記述する
    host: 'localhost',
    port: 5432,
});

module.exports = dbConfig;