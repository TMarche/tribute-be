express = require('express');
controllers = require('./tribute.controllers');

const router = express.Router();

// router.route('/').get((req, res) => {
//     res.send('Got tributes!');
// });

router.route('/').get(controllers.getTributes).post(controllers.addTribute);

router
    .route('/:id')
    .get(controllers.getTribute)
    .put(controllers.updateTribute)
    .delete(controllers.deleteTribute);

module.exports = router;
