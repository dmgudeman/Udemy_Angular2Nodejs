var express = require('express');
var router = express.Router();
const Message = require('../models/message');

router.get('/', function(req, res, next) {
    Message.find()
        .exec((err, messages) => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                msgs: messages   // identical name to the get object on FE in message.service
            })
        });

})

router.post('/', function (req, res, next) {  // the url is really /message because of the route url in app.js
    let message = new Message({  // defined in the message model, user will be added later
        content: req.body.content
    });

    message.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result  // obj is what is saved in the database
        });
    });
});

module.exports = router;
