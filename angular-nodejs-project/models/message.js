var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = require('./user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(message) {
    user.findById(message.user, function(err, user){
        user.messages.pull(message);
        user.save();
    });
});
module.exports = mongoose.model('Message', schema);