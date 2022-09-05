const mongoose = require('mongoose');
Game = require('./game.model');

module.exports = {
    getGames: (req, res) => {
        return res.send('Success -- Got Games!');
    },
    addGame: (req, res) => {
        return res.send('Success -- Added Game!');
    },
    getGame: (req, res) => {
        return res.send('Success -- Got Game!');
    },
    updateGame: (req, res) => {
        return res.send('Success -- Updated Game!');
    },
    deleteGame: (req, res) => {
        return res.send('Success -- Deleted Game!');
    },
};
