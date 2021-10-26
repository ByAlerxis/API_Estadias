const casaModel = require('../models/casas.modeld.js');
const authController = {};
const jsonwebtoken = require('jsonwebtoken');

authController.signIn = async (req, res) => {
    const {email, password} = req.body;
    const casa = await casaModel.findOne({email});
    if(!casa) return res.status(401).send('El correo no existe');
    if(casa.password != password) return res.status(401).send('La contraseña es incorrecta');

    const token = jsonwebtoken.sign({_id: casa._id, dllV: casa.dllV, dllC: casa.dllC, id: casa.id, nombre_negocio: casa.nombre_negocio, direccion: casa.direccion, email: casa.email, password: casa.password, logo: casa.logo, telefono: casa.telefono}, 'secret');
    return res.status(200).send({token});
}

authController.signUp = async (req, res) => {
    const {nombre_negocio, direccion, email, password, logo, telefono, id} = req.body;
    const newCasa = new casaModel({
        id: id,
        nombre_negocio: nombre_negocio,
        direccion: direccion,
        email: email,
        password: password,
        logo: logo,
        telefono: telefono
    });

    await newCasa.save();
    const token = jsonwebtoken.sign({_id: newCasa._id, dllV: casa.dllV, dllC: casa.dllC, id: newCasa.id, nombre_negocio: newCasa.nombre_negocio, direccion: newCasa.direccion, email: newCasa.email, password: newCasa.password, logo: newCasa.logo, telefono: newCasa.telefono}, 'secret');

    res.json({token});
}

module.exports = authController;