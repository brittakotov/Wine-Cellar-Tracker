var API_KEY = require('../../config.js')
var axios = require('axios')

var getPairings = (wineName, callback) => {
  axios({
    method: 'get',
    url: `https://api.spoonacular.com/food/wine/dishes?apiKey=${API_KEY}&wine=${wineName}`,
    headers: {
      Authorization: API_KEY
    }
  })
  .then((response) => {
    callback(null, response)
  })
  .catch((err) => {
    callback(err, null)
  })
}

module.exports = getPairings;