const express = require('express');
const router = express.Router();
const cusuario = require("../controllers/usuario");

router.get("/lista", cusuario.listado);

module.exports = router;
