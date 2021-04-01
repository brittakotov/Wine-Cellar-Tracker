const getPairings = require('../models/getPairings.js')

const getAllPairings = (req,res) => {
  let wine = req.query.wineName;
  getPairings(wine, (err, results) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      res.status(200).send(results.data)
    }
  })
}

module.exports = getAllPairings;