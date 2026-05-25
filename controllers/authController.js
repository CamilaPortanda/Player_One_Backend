const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');

exports.registro = async (req, res) => {

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    industry,
    company,
    job_position,
    country,
    user_type_id
  } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    await user.create({
      first_name,
      last_name,
      email,
      pass_hash: hashedPassword,
      phone,
      industry,
      company,
      job_position,
      country,
      user_type_id
    });

    res.status(201).json({
      mensaje: 'Usuario creado correctamente'
    });

  } catch (err) {

    console.log(err);

    res.status(400).json({
      error: 'Error al crear usuario'
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await user.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const passwordValido = await bcrypt.compare(password, usuario.pass_hash);
    if (!passwordValido) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
    const token = jwt.sign(
        { user_id: usuario.user_id, email: usuario.email },
        process.env.JWT_SECRET,
        { expiresIn: '1m' }
    );
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};
