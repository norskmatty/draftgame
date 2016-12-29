var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    players: {
        type: Array,
        required: false
    },
    team: {
        type: String,
        required: false
    }
});

var bcrypt = require('bcryptjs');

UsersSchema.methods.validatePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isValid) {
        if(err) {
            callback(err);
            return;
        }
        callback(null, isValid);
    });
};

var Users = mongoose.model('User', UsersSchema);

module.exports = Users;