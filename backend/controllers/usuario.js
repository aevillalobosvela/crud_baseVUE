const musuario = require("../models/usuario");

const crypto = require("crypto");

function sha256(string) {
  return crypto.createHash("sha256").update(string).digest("hex");
}

module.exports = {
  listado: (req, res) => {
    musuario.listado((err, results) => {
      if (err) {
        return;
      }
      return res.json({
        datos: results,
      });
    });
  },

  insertar: (req, res) => {
    const body = req.body;
    body.password = sha256(body.password);
     musuario.insertar(body, (err, results) => {
      if (err) {
        if (!res.headersSent) {
          return res.json({
            success: 0,
            error: "Usuario ya registrado",
          });
        }
      }
      if (!res.headersSent) {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  borrar: (req, res) => {
    const body = req.body;
    musuario.borrar(body, (err, results) => {
      if (err) {
        if (!res.headersSent) {
          return res.json({
            success: 0,
            error: err,
          });
        }
      }
      if (!res.headersSent) {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },

  actualizar: (req, res) => {
    const body = req.body;
    musuario.actualizar(body, (err, results) => {
      if (err) {
        if (!res.headersSent) {
          return res.json({
            success: 0,
            error: err,
          });
        }
      }
      if (!res.headersSent) {
        return res.json({
          success: 1,
          data: results,
        });
      }
    });
  },
}