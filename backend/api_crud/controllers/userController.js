'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const userData = require('../data/users');

const getAllUsers = async (req, res, next) => {
    try {
        const userlist = await userData.getUsers();
        res.send(userlist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const user = await userData.getById(user_id);
        res.send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        //Hassage du mot de passe
        bcrypt.hash(data.password, 10, async (err, hash) =>{
            data.password = hash;
            const insert = await userData.creatUser(data);
            res.send(insert);
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatUser = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const data = req.body;
        const update = await userData.updateUser(user_id, data);
        res.send(update);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const deletedUser = await userData.deleteUser(user_id);
        res.send(deletedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updatUser,
    deleteUser
}