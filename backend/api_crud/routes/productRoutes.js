'use strict';

const express = require('express');
const productControll = require('../controllers/productController');
const router = express.Router();

router.get('/products', productControll.getAllProducts);
router.get('/product/:id', productControll.getProduct);
router.post('/products', productControll.addProduct);
router.put('/product/:id', productControll.updatProduct);
router.delete('/product/:id', productControll.deleteProduct);


module.exports = {
    routes: router
}