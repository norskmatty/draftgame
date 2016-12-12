var mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
    index: {
        type: Number,
        required: false
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    school: {
        type: String,
        required: true
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

var Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;