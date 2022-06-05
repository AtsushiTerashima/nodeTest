let express = require('express'); 
let router = express.Router();
let pool = require('../db'); 

router.post('/', function(req, res, next) {
    let deleteId = req.body.deleteId;
    var query = 'DELETE FROM todolists WHERE id =' + deleteId;
    pool.connect(function (err, client) {
        client.query(query, function (err) {
            res.redirect('/');
        });
    });
});

module.exports = router