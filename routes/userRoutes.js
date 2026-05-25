const router = require('express').Router();
const User = require('../models/user');
const verificarToken = require('../middleware/verificarToken');

router.get('/perfil', verificarToken, async (req, res) => {
  const usuario = await User.findByPk(req.usuario.user_id, {
    attributes: ['user_id', 'first_name', 'last_name', 'email', 'phone', 'industry', 'company', 'job_position','pfp_id']
  });
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json(usuario);
  res.json({ mensaje: 'Ruta no protegida aún' });
});

module.exports = router;