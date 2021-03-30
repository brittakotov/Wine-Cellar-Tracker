const getAllWines = require('./controllers/getWines')
const express = require('express')
const router = express.Router();

router.get('/wines', getAllWines)

module.exports = router;