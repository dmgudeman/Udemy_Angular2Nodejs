var express = require('express');
var router = express.Router();
const Message = require('../models/message');
router.post('/', function (req, res, next) {
    let message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurrd',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;
