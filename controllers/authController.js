const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const UserType = require('../models/userType');

const getUserType = (email) => {
  if (email.endsWith('@rockwelladmin.com') || email.endsWith('@playerone.com')) {
    return 3 
  } else if (email.endsWith('@rockwell.com')) {
    return 2 
  } else {
    return 1 
  }
}

exports.registro = async (req, res) => {

  const {
    first_name,
    last_name,
    email,
    password,
    phone,
    industry_id,
    company,
    job_position,
    country,
    user_type_id,
    pfp_id
  } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email, try again.' })
  }

  try {

    const hashedPassword = await bcrypt.hash(password, 10);
    const user_type_id = getUserType(email);

    await user.create({
      first_name,
      last_name,
      email,
      pass_hash: hashedPassword,
      phone,
      industry_id,
      company,
      job_position,
      country,
      user_type_id,
      pfp_id
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

    // Traer permisos del user_type
    const userType = await UserType.findByPk(usuario.user_type_id)

    const token = jwt.sign(
      { user_id: usuario.user_id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1m' }
    );

    res.json({ 
      token,
      permisos: {
        dashboard: userType.dashboard,
        edit_products: userType.edit_products
      }
    });
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};