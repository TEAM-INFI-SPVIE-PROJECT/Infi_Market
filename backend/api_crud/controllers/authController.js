'use strict';

const bcrypt = require('bcrypt');
const authData = require('../data/auth');

const utils = require('../data/utils');
const config = require('../config');
const sql = require('mssql');

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.send('User dose not exist');
        }
        sql.connect(config.sql);
        const data = await new sql.Request()
        .input('email', sql.VarChar(100), email)
        .input('password', sql.VarChar(100), password)
        .query('SELECT * FROM [dbo].[users] WHERE email = @email');
        const user = data.recordset[0];
        bcrypt.compare(password, user.password, (_err, result) => {
            if (result) {
                res.send(user);
            } else {
                res.send('Password is not correct');
            }
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
login
}
















// try {
//     const {email, password} = req.body;
//     let pool = await sql.connect(config.sql);
//     const sqlQueries = await utils.loadSqlQueries('users');
//     const user = await pool.request()
//                         .input('email', sql.VarChar(100), req.body.email)
//                         .input('password', sql.VarChar(100), req.body.password)
//                         .query('SELECT * FROM [dbo].[users] WHERE email = @email AND password = @password');
//    console.log(user.recordset[0].email, user.recordset[0].password);
//     if (!email || !password) {
//         return res.send('User dose not exist');
//     }
//     bcrypt.compare(password, user.password = (err, result) => {
//         if (result) {
//             res.send(users);
//         } else {
//             res.send('Password is not correct');
//         }
//     });
// } catch (error) {
//     res.status(400).send(error.message);
// }
// }

// module.exports = {
// login
// }