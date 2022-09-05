express = require('express');
controllers = require('./game.controllers');

const router = express.Router();

router.route('/').get(controllers.getGames).post(controllers.addGame);

router
    .route('/:id')
    .get(controllers.getGame)
    .put(controllers.updateGame)
    .delete(controllers.deleteGame);

module.exports = router;
