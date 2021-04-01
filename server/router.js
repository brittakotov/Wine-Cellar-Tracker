const getAllWines = require('./controllers/getAllWines')
const getAllPairings = require('./controllers/getAllPairings')
const addNewWine = require('./controllers/addNewWine')
const express = require('express')

const router = express.Router();

router.get('/wines', getAllWines)

router.get('/pairings/', getAllPairings)

router.post('/wine', addNewWine)

module.exports = router;