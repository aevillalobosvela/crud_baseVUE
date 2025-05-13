const musuario = require("../models/usuario");

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
}