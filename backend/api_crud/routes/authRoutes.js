'use strict';

const express = require('express');
const authControll = require('../controllers/authController');
const router = express.Router();

router.post('/logins', authControll.login);



module.exports = {
    routes: router
}