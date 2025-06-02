const musuario = require("../models/usuario");
const jwt = require("jsonwebtoken");
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
      console.log(results);
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
    const id = req.params.id;
    musuario.borrar({ id: id }, (err, results) => {
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

  actualizarpass: (req, res) => {
    const body = req.body;
    body.password = sha256(body.password);
    musuario.actualizarpass(body, (err, results) => {
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
  verificar: (req, res) => {
    const body = req.body;
    console.log(body);
    body.password = sha256(body.password);
    musuario.verificar(body, (err, results) => {
      if (err) {
        return res.status(401).json({
          error: err.message,
          realizado: 0,
          mensaje: "Verificación fallida",
        });
      }
      const payload = {
        id: results[0].id,
        username: results[0].username
      };
      jwt.sign(payload, process.env.SECRET, { expiresIn: "7d" }, (err, token) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
            realizado: 0,
            mensaje: "Error al generar el token",
          });
        }
        return res.status(200).json({
          datos: results[0],
          token: token,
        });
      });
    });
  }
}