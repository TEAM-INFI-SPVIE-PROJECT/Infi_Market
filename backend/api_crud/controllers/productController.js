'use strict';

const productData = require('../data/products');

const getAllProducts = async (req, res) => {
    try {

        const productlist = await productData.getProducts();
        res.send(productlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const product = await productData.getById(product_id);
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addProduct = async (req, res) => {
    try {
        const data = req.body;
        const insert = await productData.creatProduct(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatProduct = async (req, res) => {
    try {
        const product_id =  req.params.id;
        const data = req.body;
        const updated = await productData.updateProduct(product_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product_id = req.params.id;
        const deletedProduct = await productData.deleteProduct(product_id);
        res.send(deletedProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    addProduct,
    updatProduct,
    deleteProduct
}