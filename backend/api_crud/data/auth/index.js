
'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const logins = async(email, password) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const userlogin = await pool.request()
                            .input('email', sql.NVarChar(200), email)
                            .input('password', sql.NVarChar(200), password)
                            .query("SELECT * FROM users WHERE email = @email AND password = @password");
                             console.log(userlogin);
        return userlogin.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    logins
}