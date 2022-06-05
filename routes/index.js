let express = require('express');
let db = require('../db');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ToDoリスト' });
});

router.post('/', function(req, res, next) {
    let todo = req.body.todo;
    let date = req.body.date;
    let sche = req.body.sche;
    let rate = req.body.rate;
    let prio = req.body.prio;
    let query = "INSERT INTO todolists (todo, date, sche, rate, prio) VALUES ('" + todo + "'," + "'" + date + "'," + "'" + sche + "'," + "'" + rate + "'," + "'" + prio + "')";
    db.connect(function (err, client) {
        client.query(query, function (err) {
            res.redirect('/');
        });
    });
    console.log(todo);
    console.log(date);
    console.log(query);
});

module.exports = router;