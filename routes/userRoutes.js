const router = require('express').Router();
const User = require('../models/user');
const verificarToken = require('../middleware/verificarToken');
const sequelize = require('../config/database');

router.get('/perfil', verificarToken, async (req, res) => {
  const usuario = await User.findByPk(req.usuario.user_id, {
    attributes: ['user_id', 'first_name', 'last_name', 'email', 'phone', 'industry_id', 'company', 'job_position','pfp_id']
  });
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
});

router.get('/bestscores', verificarToken, async (req, res) => {
  try {
    const resultados = await sequelize.query(
      `SELECT minigame_id, MAX(score) as best_score 
       FROM attempts 
       WHERE user_id = :userId 
       GROUP BY minigame_id`,
      {
        replacements: { userId: req.usuario.user_id },
        type: sequelize.QueryTypes.SELECT
      }
    );
    res.json(resultados);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener scores' });
  }
});

router.get('/gamesplayed', verificarToken, async (req, res) => {
  try {
    const resultado = await sequelize.query(
      'SELECT COUNT(*) as games_played FROM attempts WHERE user_id = :userId',
      {
        replacements: { userId: req.usuario.user_id },
        type: sequelize.QueryTypes.SELECT
      }
    );
    res.json({ games_played: resultado[0].games_played });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener games played' });
  }
});

module.exports = router;