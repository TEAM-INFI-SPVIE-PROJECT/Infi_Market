'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getSites = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sites');
        const sitesList = await pool.request().query(sqlQueries.siteList);
        return sitesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(site_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sites');
        const site = await pool.request()
                            .input('site_id', sql.Int, site_id)
                            .query(sqlQueries.siteById);
        return site.recordset;
    } catch (error) {
        return error.message;
    }
}



const creatSite = async (sitedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sites');
        const insertSite = await pool.request()
                            .input('site_name', sql.NVarChar(100), sitedata.site_name)
                            .query(sqlQueries.createSite);                            
        return insertSite.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateSite = async (site_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sites');
        const update = await pool.request()
                        .input('site_id', sql.Int, site_id)
                        .input('site_name', sql.NVarChar(100), data.site_name)
                        .query(sqlQueries.updateSite);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteSite = async (site_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sites');
        const deleteSite = await pool.request()
                            .input('site_id', sql.Int, site_id)
                            .query(sqlQueries.deleteSite);
        return deleteSite.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getSites,
    getById,
    creatSite,
    updateSite,
    deleteSite
}