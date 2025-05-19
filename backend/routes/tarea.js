const express = require('express');
const router = express.Router();
const ctarea = require("../controllers/tarea");
const auth = require('../auth');
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
      const body = req.body;
      cb(null, `img${Date.now()}.${file.mimetype.split("/")[1]}`);
    },
  });
  
  const upload = multer({ storage });

router.get("/lista",auth.verificatoken, ctarea.listado);

router.post("/insertar",upload.single("imagentarea"), ctarea.insertar);

router.delete("/borrar", ctarea.borrar);

router.put("/actualizar", ctarea.actualizar);

module.exports = router;

