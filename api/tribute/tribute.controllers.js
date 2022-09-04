const mongoose = require('mongoose');
Tribute = require('./tribute.model');

module.exports = {
    getTributes: (req, res) => {
        mongoose.connect('mongodb://127.0.0.1:27017/tribute');
        Tribute.find({})
            .exec()
            .then((result) => {
                res.status(200).send({ tributes: result });
            });
    },
    addTribute: (req, res) => {
        const { name } = req.body;
        mongoose.connect('mongodb://127.0.0.1:27017/tribute');
        const newTribute = Tribute({
            name: name,
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
        });
        newTribute
            .save()
            .then((result) => {
                res.status(200).send({ tribute: result });
            })
            .catch((error) => {
                console.log('ERROR!', error);
                res.status(500).send({ error: 'OOPS! An error occurred!' });
            });
    },
    getTribute: (req, res) => {
        res.send({ status: 'OK -- got tribute' });
    },
    updateTribute: (req, res) => {
        res.send({ status: 'OK -- updated tribute' });
    },
    deleteTribute: (req, res) => {
        res.send({ status: 'OK -- deleted tribute' });
    },
};
