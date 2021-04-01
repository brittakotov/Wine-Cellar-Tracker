const getAllWines = require('./controllers/getAllWines')
const getAllPairings = require('./controllers/getAllPairings')
const express = require('express')

const router = express.Router();

router.get('/wines', getAllWines)

router.get('/pairings/', getAllPairings)

module.exports = router;