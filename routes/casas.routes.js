const express = require('express');
const router = express.Router();
const casasController = require('../controllers/casas.controller.js');

router.get('/', casasController.getCasas);
router.post('/', casasController.addCasa);
router.get('/:id', casasController.getCasa);
router.put('/:id', casasController.putCasa);
router.delete('/:id', casasController.deleteCasa);

module.exports = router;