const db = require('../../db/MySQL');

var addWine = (params, callback) => {
  console.log(params)
  var brand = params.brand;
  var name = params.name;
  var blend = params.blend;
  var vintage = params.vintage;
  var place = params.place;
  var price = params.price;
  var alcohol = params.alcohol;
  var photo = params.photo;

  let sql = `INSERT INTO cellar (brand,name,blend,vintage,place,price,alcohol,photo) VALUES ('${brand}','${name}','${blend}',${vintage},'${place}',${price},${alcohol},'${photo}')`;
  db.query(sql, (err, results) => {
    if (err) {
      callback(err, null)
    } else {
      callback(null, results)
    }
  })
}

module.exports = addWine;