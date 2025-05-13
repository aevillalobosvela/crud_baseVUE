const express = require('express');
const router = express.Router();
const cusuario = require("../controllers/usuario");
const auth = require('../auth');

/* router.get("/lista",auth.verificatoken, cusuario.listado); */

router.get("/lista", cusuario.listado);

router.post("/insertar", cusuario.insertar);

router.delete("/borrar", cusuario.borrar);

router.put("/actualizar", cusuario.actualizar);

module.exports = router;

