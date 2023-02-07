'use strict';

const express = require('express');
const userControll = require('../controllers/userController');
const router = express.Router();

router.get('/users', userControll.getAllUsers);
router.get('/user/:id', userControll.getUser);
router.post('/users', userControll.addUser);
router.put('/user/:id', userControll.updatUser);
router.delete('/user/:id', userControll.deleteUser);


module.exports = {
    routes: router
}