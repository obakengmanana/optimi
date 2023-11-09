const express = require('express');
const app = express();
const port = 3000;
const data = require("../data/data.json");

//Express serves index.html from root folder which executes client.js
app.use( express.static( __dirname + '/' ) );

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Express route which reads the data.json file and loads it in a route at /json/
app.get('/projects', (req, res) => {
  res.json( data );
});


app.get('/', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});