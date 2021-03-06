const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.end();
});

app.get('/api/data', (req, res) => {
  console.log(req.query);
  console.log(req.query.d);
  res.end();
});

app.listen(process.env.PORT || 9001, () => console.log('The API is running'));
