'use strict';

const express = require('express');
const siteControll = require('../controllers/siteController');
const router = express.Router();

router.get('/sites', siteControll.getAllSites);
router.get('/site/:id', siteControll.getSite);
router.post('/site', siteControll.addSite);
router.put('/site/:id', siteControll.updatSite);
router.delete('/site/:id', siteControll.deleteSite);


module.exports = {
    routes: router
}