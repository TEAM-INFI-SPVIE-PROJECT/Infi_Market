'use strict';

const express = require('express');
const categoryControll = require('../controllers/categoryController');
const router = express.Router();

router.get('/categorys', categoryControll.getAllCategorys);
router.get('/category/:id', categoryControll.getCategory);
router.post('/categorys', categoryControll.addCategory);
router.put('/category/:id', categoryControll.updatCategory);
router.delete('/category/:id', categoryControll.deleteCategory);


module.exports = {
    routes: router
}