const express = require('express');
const router = new express.Router();

router.route('/api/users', require('./users.route'));

module.exports = router;
