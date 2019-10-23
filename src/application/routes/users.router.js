const express = require('express');
const router = express.Router();

const usersService = require('../controllers/users.controller');

router.get('/', usersService.getUsers);

module.exports = router;