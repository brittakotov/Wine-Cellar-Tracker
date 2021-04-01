const addWine = require('../models/addWine.js')

const addNewWine = (req,res) => {
  const params = req.body;
  addWine(params, (err, results) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      res.status(201).send(results)
    }
  })
}

module.exports = addNewWine;
