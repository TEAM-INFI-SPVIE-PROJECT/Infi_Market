'use strict';

const siteData = require('../data/sites');

const getAllSites = async (req, res, next) => {
    try {

        const sitelist = await siteData.getSites();
        res.send(sitelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSite = async (req, res, next) => {
    try {
        const site_id = req.params.id;
        const site = await siteData.getById(site_id);
        res.send(site);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addSite = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await siteData.creatSite(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatSite = async (req, res, next) => {
    try {
        const site_id =  req.params.id;
        const data = req.body;
        const updated = await siteData.updateSite(site_id, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteSite = async (req, res, next) => {
    try {
        const site_id = req.params.id;
        const deletedSite = await siteData.deleteSite(site_id);
        res.send(deletedSite);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllSites,
    getSite,
    addSite,
    updatSite,
    deleteSite
}