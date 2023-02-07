'use strict';

const categoryData = require('../data/categorys');

const getAllCategorys = async (req, res, next) => {
    try {
        const categorylist = await categoryData.getCategorys();
        res.send(categorylist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getCategory = async (req, res) => {
    try {
        const category_id = req.params.id;
        const category = await categoryData.getById(category_id);
        res.send(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addCategory = async (req, res) => {
    try {
        const data = req.body;
        const insert = await categoryData.creatCategory(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatCategory = async (req, res) => {
    try {
        const category_id =  req.params.id;
        const data = req.body;
        const updated = await categoryData.updateCategory(category_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category_id = req.params.id;
        const deletedCategory = await categoryData.deleteCategory(category_id);
        res.send(deletedCategory);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllCategorys,
    getCategory,
    addCategory,
    updatCategory,
    deleteCategory
}