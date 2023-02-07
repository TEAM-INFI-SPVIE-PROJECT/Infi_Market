'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRoles = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const roleList = await pool.request().query(sqlQueries.roleList);
        return roleList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(role_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const role = await pool.request()
                            .input('role_id', sql.Int, role_id)
                            .query(sqlQueries.roleById);
        return role.recordset;
    } catch (error) {
        return error.message;
    }
}



const creatRole = async (roledata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const insertrole = await pool.request()
                            .input('name', sql.NVarChar(100), roledata.name)
                            .query(sqlQueries.creatRole);                            
        return insertrole.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRole = async (role_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const update = await pool.request()
                        .input('role_id', sql.Int, role_id)
                        .input('name', sql.NVarChar(100), data.name)
                        .query(sqlQueries.updateRole);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRole = async (role_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('roles');
        const deleteRole = await pool.request()
                            .input('role_id', sql.Int, role_id)
                            .query(sqlQueries.deleteRole);
        return deleteRole.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRoles,
    getById,
    creatRole,
    updateRole,
    deleteRole
}