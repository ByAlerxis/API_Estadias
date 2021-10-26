const adminModel = require('../models/admins.model.js');
const { model } = require('mongoose');
const adminsController = {};

adminsController.getAdmins = async (req, res) => {
    const admins = await adminModel.find();
    res.json(admins);
};

adminsController.getAdmin = async (req, res) => {
    const admin = await adminModel.findById(req.params.id);
    res.json(admin);
};

adminsController.addAdmin = async (req, res) => {
    const admin = await adminModel(req.body);
    await admin.save();
    res.json({
        status: 'Admin añadido',
    });
};

adminsController.putAdmin = async (req, res) => {
    const { id } = req.params;
    const admin = {
        nombre: req.body.nombre,
        email: req.body.email,
        foto: req.body.foto,
        password: req.body.password,
        rol: req.body.rol
    };
    await adminModel.findByIdAndUpdate(id, { $set: admin }, { new: true });
    res.json({ status: 'Admin actualizado' });
};

adminsController.deleteAdmin = async (req, res) => {
    await adminModel.findByIdAndDelete(req.params.id);
    res.json({status: 'Admin eliminado'});
};

module.exports = adminsController;