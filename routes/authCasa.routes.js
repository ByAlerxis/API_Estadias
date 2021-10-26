const express = require('express');
const router = express.Router();
const authCasaController = require('../controllers/authCasa.controller.js');

router.post('/signin', authCasaController.signIn);
router.post('/signup', authCasaController.signUp);

module.exports = router;