require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/userRoutes');
const profilePictureRoutes = require('./routes/profilePictureRoutes');
const productRoutes = require('./routes/productRoutes');
const industryRoutes = require('./routes/industryRoutes');
const app = express();




app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

app.get('/api', (req, res) => {
  res.json({
    message: 'API corriendo'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/pfps', profilePictureRoutes);
app.use('/api/industries', industryRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al iniciar el servidor:', err);
    process.exit(1);
  });
