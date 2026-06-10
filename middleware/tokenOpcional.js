const jwt = require('jsonwebtoken');

const tokenOpcional = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Invitado
  if (!token) {
    console.log("SIN TOKEN -> usando usuario 11")
    req.usuario = { user_id: 11 };
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

module.exports = tokenOpcional;