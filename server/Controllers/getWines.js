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

// const getReviewsMeta = (req, res) => {
//   getMetaModel(req.query, (err, results) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.status(200).send(results)
//     }
//   })
// }

// //post
// const postReview = (req, res) => {
//   postReviewModel(req.body, (err, results) => {
//     if (err) {
//       res.sendStatus(400);
//     } else {
//       res.sendStatus(200);
//     }
//   })
// }

// //put helpful
// const putHelpful = (req, res) => {
//   putHelpfulModel(req.query, (err, results) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(200)
//     }
//   })
// }

// //put report
// const putReport = (req, res) => {
//   putReportModel(req.query, (err, results) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.sendStatus(200)
//     }
//   })
// }

module.exports = getAllWines;
