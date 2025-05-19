const mtarea = require("../models/tarea");

module.exports = {
    listado: (req, res) => {
        mtarea.listado((err, results) => {
            if (err) {
                return;
            }
            return res.json({
                datos: results,
            });
        });
    },

    insertar: (req, res) => {
        const { body, file } = req;

        let url = null;
        if (file) {
            url = `http://localhost:3000/uploads/${file.filename}`;
            console.log(url);
        }

        mtarea.insertar(url, body, (err, results) => {
            if (err) {
                if (!res.headersSent) {
                    return res.json({
                        success: 0,
                        error: "err",
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
        mtarea.borrar(body, (err, results) => {
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
        mtarea.actualizar(body, (err, results) => {
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