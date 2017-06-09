const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

router.post('/', function (req, res, next) {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
    });
    user.save( function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            msg: result  // msg is what is sent back to the front end to be saved
        });
    });
    
});

router.post('/signin', function (req, res, next){
    User.findOne({email: req.body.email}, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentails'}
            })
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid login credentails'}
            })
        }
        let token = jwt.sign({user: user}, 'dave', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully logged in ',
            token: token,
            userId: user._id
        })


    })
})

module.exports = router;
