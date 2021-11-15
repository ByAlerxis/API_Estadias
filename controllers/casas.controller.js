const casaModel = require('../models/casas.model.js');
const { model } = require('mongoose');
const casasController = {};

casasController.getCasas = async (req, res) => {
    const casas = await casaModel.find();
    res.json(casas);
}

casasController.getCasa = async (req, res) => {
    const casa = await casaModel.findById(req.params.id);
    res.json(casa);
}

casasController.addCasa = async (req, res) => {
    const casa = await casaModel(req.body);
    await casa.save();
    res.json({
        status: 'Casa de cambio añadida',
    });
};

casasController.putCasa = async (req, res) => {
    const { id } = req.params;
    const casa = {
        nombre_negocio: req.body.nombre_negocio,
        direccion: req.body.direccion,
        email: req.body.email,
        password: req.body.password,
        logo: req.body.logo,
        telefono: req.body.telefono,
        dllC: req.body.dllC,
        dllV: req.body.dllV,
        latitud: req.body.latitud,
        longitud: req.body.longitud
    };
    await casaModel.findByIdAndUpdate(id, { $set: casa }, { new: true});
    res.json({ status: 'Casa de cambio actualizada'});
}

casasController.deleteCasa = async (req, res) => {
    await casaModel.findByIdAndDelete(req.params.id);
    res.json({ status: 'Casa de cambio eliminada'});
};

module.exports = casasController;