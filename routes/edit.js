let express = require('express');
let router = express.Router();
let pool = require('../db'); 

router.post('/', function (req, res, next) {
    let editId = req.body.editId;
    let query = 'SELECT * FROM todolists WHERE id =' + editId;
    console.log(query)
    pool.connect(function (err, client) {
        client.query(query, function (err, result) {
            res.render('edit', { 
                title: 'ToDoの編集',
                editId: result.rows[0].id,
                todoEdit: result.rows[0].todo,
                dateEdit: result.rows[0].date,
                scheEdit: result.rows[0].sche,
                rateEdit: result.rows[0].rate,
                prioEdit: result.rows[0].prio
            });
        });
    });
});

module.exports = router;