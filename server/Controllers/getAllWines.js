const getWines = require('../models/getWines.js')

const getAllWines = (req,res) => {

  getWines((err, results) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(results)
    }
  })
}

module.exports = getAllWines;
