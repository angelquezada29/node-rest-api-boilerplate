const express = require('express');
const router = express.Router();

const usersCtrl = require('../controllers/helloWorld.controller');

router.get('/', usersCtrl.usersService);

module.exports = router;