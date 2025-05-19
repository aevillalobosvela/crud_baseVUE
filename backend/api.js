const express = require('express');
const cors = require('cors');
require('dotenv').config();

const usuarioRoutes = require('./routes/usuario');
const tareaRoutes = require('./routes/tarea');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/usuario', usuarioRoutes);
app.use('/tarea', tareaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
