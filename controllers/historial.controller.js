const historialModel = require('../models/historial.model.js');
const { model } = require('mongoose');
const historialController = {};

historialController.getHistoriales = async (req, res) => {
    const historial = await historialModel.find();
    res.json(historial);
}

historialController.getHistorial = async (req, res) => {
    const historial = await historialModel.findById(req.params.id);
    res.json(historial);
}

historialController.addHistorial = async (req, res) => {
    const historial = await historialModel(req.body);
    await historial.save();
    res.json({
        status: 'Resultado añadido exitosamente',
    });
};


module.exports = historialController;