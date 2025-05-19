const express = require('express');
const router = express.Router();
const ctarea = require("../controllers/tarea");
const auth = require('../auth');

router.get("/lista",auth.verificatoken, ctarea.listado);

router.post("/insertar",auth.verificatoken, ctarea.insertar);

router.delete("/borrar", ctarea.borrar);

router.put("/actualizar", ctarea.actualizar);

module.exports = router;

