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

  insertar: (datos, callBack) => {
    coneccion.query(
      `insert into usuario (username,password) values (?,?)`,
      [
        datos.username,
        datos.password,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  borrar: (datos, callBack) => {
    coneccion.query(
      `delete from usuario where id_user=?`,
      [datos.id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  actualizar: (datos, callBack) => {
    coneccion.query(
      `update usuario set username=? where id_user=?`,
      [
        datos.username,
        datos.id,
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  actualizarpass: (datos, callBack) => {
    coneccion.query(
      `update usuario set password=? where id=?`,
      [datos.password, datos.id],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  verificar: (datos, callBack) => {
    // Validar que ambos campos estén presentes antes de hacer la consulta
    if (!datos.username || !datos.password) {
      return callBack(new Error("Username o password no proporcionado"));
    }
  
    coneccion.query(
      `SELECT * FROM usuario WHERE username = ? AND password = ?`,
      [datos.username, datos.password],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
  
        if (results.length === 0) {
          return callBack(new Error("Credenciales incorrectas"));
        }
  
        return callBack(null, results);
      }
    );
  }
  
}