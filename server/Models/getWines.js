const db = require('../../db/MySQL');

var getWines = (callback) => {
  let sql = 'SELECT * FROM cellar';
  db.query(sql, (err, results) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}

module.exports = getWines;