const mongoose = require('mongoose');

const Tribute = mongoose.model('Tribute', {
    name: {
        type: String,
        required: true,
    },
    str: {
        type: Number,
    },
    dex: {
        type: Number,
    },
    con: {
        type: Number,
    },
    int: {
        type: Number,
    },
    wis: {
        type: Number,
    },
    cha: {
        type: Number,
    },
});

module.exports = Tribute;
