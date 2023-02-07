'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getCategorys = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorys');
        const categoryList = await pool.request().query(sqlQueries.categoryList);
        return categoryList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(category_id, category_name) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorys');
        const category = await pool.request()
                            .input('category_id', sql.Int, category_id)
                            .input('category_name', sql.NVarChar(100), category_name)
                            .query(sqlQueries.categoryById);
        return category.recordset;
    } catch (error) {
        return error.message;
    }
}



const creatCategory = async (categorydata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorys');
        const insertcategory = await pool.request()
                            .input('category_name', sql.NVarChar(100), categorydata.category_name)
                            .input('user_id', sql.Int, categorydata.user_id)
                            .query(sqlQueries.creatCategory);                            
        return insertcategory.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateCategory = async (category_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorys');
        const update = await pool.request()
                        .input('category_id', sql.Int, category_id)
                        .input('category_name', sql.NVarChar(100), data.category_name)
                        .input('user_id', sql.Int, data.user_id)
                        .query(sqlQueries.updateCategory);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteCategory = async (category_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('categorys');
        const deleteCategory = await pool.request()
                            .input('category_id', sql.Int, category_id)
                            .query(sqlQueries.deleteCategory);
        return deleteCategory.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getCategorys,
    getById,
    creatCategory,
    updateCategory,
    deleteCategory
}