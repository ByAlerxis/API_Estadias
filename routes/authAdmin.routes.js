const express = require('express');
const router = express.Router();
const authAdminController = require('../controllers/authAdmin.controller.js');

router.post('/signin', authAdminController.signIn);
router.post('/signup', authAdminController.signUp);

module.exports = router;