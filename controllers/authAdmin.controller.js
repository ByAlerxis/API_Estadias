const adminModel = require('../models/admins.model.js');
const casaModel = require('../models/casas.model.js');
const authController = {};
const jsonwebtoken = require('jsonwebtoken');

authController.signIn = async (req, res) => {
    const {email, password} = req.body;

    if (admin = await adminModel.findOne({email})) {
        if(!admin) return res.status(401).send('El correo no existe');
        if(admin.password != password) return res.status(401).send('La contraseña es incorrecta');

        const token = jsonwebtoken.sign({_id: admin._id, id: admin.id, nombre: admin.nombre, email: admin.email, password: admin.password, foto: admin.foto, rol: admin.rol}, 'secret');
        return res.status(200).send({token});

    } else {
        const casa = await casaModel.findOne({email});
        if(!casa) return res.status(401).send('El correo no existe');
        if(casa.password != password) return res.status(401).send('La contraseña es incorrecta');

        const token = jsonwebtoken.sign({_id: casa._id, dllV: casa.dllV, dllC: casa.dllC, id: casa.id, nombre_negocio: casa.nombre_negocio, direccion: casa.direccion, email: casa.email, password: casa.password, logo: casa.logo, telefono: casa.telefono}, 'secret');
        return res.status(200).send({token});
    }

    
    
}

authController.signUp = async (req, res) => {
    const {nombre, email, password, foto, id, rol} = req.body;

    const newAdmin = new adminModel({
        id: id,
        nombre: nombre,
        email: email,
        password: password,
        foto: foto,
        rol: 'Admin'
    });

    await newAdmin.save();
    const token = jsonwebtoken.sign({_id: newAdmin._id, id: newAdmin.id, nombre: newAdmin.nombre, email: newAdmin.email, password: newAdmin.password, rol: newAdmin.rol, foto: newAdmin.foto}, 'secret');

    res.json({token});
}


module.exports = authController;