const express = require('express');
const router = require('./router');
const path = require('path');


const app = express();
const port = 3000;


app.use(express.json());


app.use(express.static(path.join(__dirname + '/../public')))




app.use(router);


app.listen(port, () => {
  console.log('listening at port 3000')
})