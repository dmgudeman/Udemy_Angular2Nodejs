var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', {email: doc.email});
    });
});

router.post('/', function (req, res, next) {
    let email = req.body.email;
    let user = new User({
        firstName: 'Dave',
        lastName: 'Gudeman',
        password: 'super-secret',
        email: email 
    });
    user.save();
    res.redirect('/');
});

module.exports = router;
