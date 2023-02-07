'use strict';

const roleData = require('../data/roles');

const getAllRoles = async (req, res, next) => {
    try {

        const rolelist = await roleData.getRoles();
        res.send(rolelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRole = async (req, res, next) => {
    try {
        const role_id = req.params.id;
        const role = await roleData.getById(role_id);
        res.send(role);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRole = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await roleData.creatRole(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatRole = async (req, res, next) => {
    try {
        const role_id =  req.params.id;
        const data = req.body;
        const updated = await roleData.updateRole(role_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRole = async (req, res, next) => {
    try {
        const role_id = req.params.id;
        const deletedRole = await roleData.deleteRole(role_id);
        res.send(deletedRole);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRoles,
    getRole,
    addRole,
    updatRole,
    deleteRole
}