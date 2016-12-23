var mongoose = require('mongoose');

var DraftorderSchema = new mongoose.Schema({
    round: {
        type: Number,
        required: true
    },
    roundPick: {
        type: Number,
        required: true
    },
    overallPick: {
        type: Number,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    pic: {
        type: String,
        required: false
    }
});

var Draftorder = mongoose.model('Draftorder', DraftorderSchema);

module.exports = Draftorder;