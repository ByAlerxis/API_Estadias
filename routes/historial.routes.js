const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historial.controller.js');

router.get('/', historialController.getHistoriales);
router.post('/', historialController.addHistorial);
router.get('/:id', historialController.getHistorial);

module.exports = router;