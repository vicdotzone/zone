const express = require('express');
const path = require('path');

const STATIC_PATH = path.join(__dirname, '../../build/');

console.log('STATIC_PATH', STATIC_PATH);

const app = express();

app.use(express.static(STATIC_PATH));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:8080');
});
