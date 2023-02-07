'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUsers = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const usersList = await pool.request().query(sqlQueries.userList);
        return usersList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(user_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const user = await pool.request()
                            .input('user_id', sql.Int, user_id)
                            .query(sqlQueries.userById);
        return user.recordset;
    } catch (error) {
        return error.message;
    }
}



const creatUser = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertUser = await pool.request()
                            .input('last_name', sql.NVarChar(100), data.last_name)
                            .input('first_name', sql.NVarChar(1500), data.first_name)
                            .input('role_id', sql.Int, data.role_id)
                            .input('email', sql.NVarChar(200), data.email)
                            .input('password', sql.NVarChar(200), data.password)
                            .query(sqlQueries.createUser);                         
        return insertUser.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateUser = async (user_id, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const update = await pool.request()
                        .input('user_id', sql.Int, user_id)
                        .input('last_name', sql.NVarChar(100), data.last_name)
                        .input('first_name', sql.NVarChar(150), data.first_name)
                        .input('role_id', sql.Int, data.role_id)
                        .input('email', sql.NVarChar(150), data.email)
                        .input('password', sql.NVarChar(200), data.password)
                        .query(sqlQueries.updateUser);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteUser = async (user_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const deleteUser = await pool.request()
                            .input('user_id', sql.Int, user_id)
                            .query(sqlQueries.deleteUser);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUsers,
    getById,
    creatUser,
    updateUser,
    deleteUser
}