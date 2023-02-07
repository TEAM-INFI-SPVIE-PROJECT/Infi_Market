'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getProducts = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products');
        const productList = await pool.request().query(sqlQueries.productList);
        return productList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(product_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products');
        const product = await pool.request()
                            .input('product_id', sql.Int, product_id)
                            .query(sqlQueries.productById);
        return product.recordset;
    } catch (error) {
        return error.message;
    }
}



const creatProduct = async (productdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products');
        const insertproduct = await pool.request()
                            .input('product_name', sql.NVarChar(100), productdata.product_name)
                            .input('product_status', sql.NVarChar(100), productdata.product_status)
                            .input('category_id', sql.Int, productdata.category_id)
                            .input('creationDate', sql.Date, productdata.creationDate)
                            .input('site_name', sql.NVarChar(100), productdata.site_name)
                            .input('montant', sql.NVarChar(100), productdata.montant)
                            .query(sqlQueries.creatProduct);                            
        return insertproduct.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateProduct = async (product_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products');
        const update = await pool.request()
                        .input('product_id', sql.Int, product_id)
                        .input('product_name', sql.NVarChar(100), data.product_name)
                        .input('product_status', sql.NVarChar(100), data.product_status)
                        .input('category_id', sql.Int, data.category_id)
                        .input('creationDate', sql.Date, data.creationDate)
                        .input('site_name', sql.NVarChar(100), data.site_name)
                        .input('montant', sql.NVarChar(100), data.montant)
                        .query(sqlQueries.updateProduct);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteProduct = async (product_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('products');
        const deleteProduct = await pool.request()
                            .input('product_id', sql.Int, product_id)
                            .query(sqlQueries.deleteProduct);
        return deleteProduct.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getProducts,
    getById,
    creatProduct,
    updateProduct,
    deleteProduct
}