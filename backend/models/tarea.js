const coneccion = require("../database");

module.exports = {
  listado: (callBack) => {
    coneccion.query('select * from tarea', [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },

  insertar: (url, datos, callBack) => {
    coneccion.query(
      `insert into tarea (descripcion,estado,imagen_tarea,id) values (?,?,?,?)`,
      [
        datos.descripcion,
        datos.estado,
        url,
        datos.id
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
      `delete from tarea where id_tarea=?`,
      [datos.id_tarea],
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
      `update tarea set descripcion=?, estado=?, imagen_tarea=?, id=? where id_tarea=?`,
      [
        datos.descripcion,
        datos.estado,
        datos.imagen_tarea,
        datos.id,
        datos.id_tarea,
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },  
}