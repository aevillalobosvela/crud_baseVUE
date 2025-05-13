const coneccion = require("../database");

module.exports = {
  listado: (callBack) => {
    coneccion.query('select * from usuario', [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
}