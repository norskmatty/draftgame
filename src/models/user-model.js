var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    overall: {
        type: Number,
        required: true
    },
    posrank: {
        type: Number,
        required: true
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;