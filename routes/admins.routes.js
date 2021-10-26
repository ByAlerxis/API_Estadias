const express = require('express');
const router = express.Router();
const adminsController = require('../controllers/admins.controller.js');

router.get('/', adminsController.getAdmins);
router.post('/', adminsController.addAdmin)
router.get('/:id', adminsController.getAdmin);
router.put('/:id', adminsController.putAdmin);
router.delete('/:id', adminsController.deleteAdmin);

module.exports = router;