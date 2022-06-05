var express = require('express');
var router = express.Router();
var pool = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
    let query =  'SELECT *, TO_CHAR(date, \'YYYY年MM月DD日\') AS date,TO_CHAR(sche, \'YYYY年MM月DD日\') AS sche FROM todolists';   
    pool.connect(function (err, client) {
        client.query(query, function (err, result) {
            res.render('top', {
                title: 'ToDoリスト',
                todoList: result.rows 
            });
        });
    });
});

router.post('/', function(req, res, next) {
    let editId = req.body.editId;
    let todoEdit = req.body.todoEdit;
    let dateEdit = req.body.dateEdit;
    let scheEdit = req.body.scheEdit;
    let rateEdit = req.body.rateEdit;
    let prioEdit = req.body.prioEdit;
    let query = "INSERT INTO todolists (todo, date, sche, rate, prio) VALUES ('" + todoEdit + "'," + "'" + dateEdit + "'," + "'" + scheEdit + "'," + "'" + rateEdit + "'," + "'" + prioEdit + "')";
    let editQuery = "UPDATE todolists SET todo = '" + todoEdit + "', date = '" + dateEdit +"', sche = '" + scheEdit +"', rate = '" + rateEdit +"', prio = '" + prioEdit +"' WHERE id = " + editId;

    pool.connect(function (err, client) {
        if (todoEdit && dateEdit && scheEdit && rateEdit && prioEdit) {
            client.query(editQuery, function (err) {
                res.redirect('/');
            });
        } else {
            client.query(query, function (err) {
                res.redirect('/');
            });
        }
    });
});

module.exports = router;