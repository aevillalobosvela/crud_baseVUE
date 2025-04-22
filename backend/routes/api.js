const express = require('express');
const router = express.Router();
const db = require('../database');

// Ruta de prueba
router.get('/prueba', (req, res) => {
  res.json({ mensaje: 'Ruta funcionando correctamente' });
});

// Ruta para obtener usuarios
router.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuario';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error al consultar la base de datos:', err);
      res.status(500).json({ error: 'Error al obtener usuarios' });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
