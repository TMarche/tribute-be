const mongoose = require('mongoose');

const Game = mongoose.model('Game', {
    tributes: [{ type: mongoose.Schema.ObjectId, ref: 'Tribute' }],
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
});

module.exports = Game;
