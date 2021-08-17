const { param } = require("../routes/user");


exports.getUsuarios = (req, res) => {
    const params = req.query;
    res.json({ 
        msg: "get Users desde Controller",
        opcionales: params
    });
}

exports.crearUsuario = (req, res) => {
    res.json({
        body: req.body
    });
}

exports.actualizarUsuario = (req, res) => {
    const id_user = req.params.id;
    res.json({ 
        msg: "put Users desde Controller",
        entrada: id_user
    });
}

exports.eliminarUsuario = (req, res) => {
    res.json({ msg: "delete Users desde Controller"});
}