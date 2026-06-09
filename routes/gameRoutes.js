const express = require('express');
const router = require('express').Router();
const gameController = require('../controllers/gameController');
const verificarToken = require('../middleware/verificarToken');

router.get('/get-player-data', verificarToken, gameController.getPlayerData);
router.post('/post-attempt', verificarToken, gameController.postAttempt);
router.post('/interaction-event', verificarToken, gameController.createInteractionEvent);

module.exports = router;
