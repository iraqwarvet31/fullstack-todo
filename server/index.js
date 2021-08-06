 
const express = require('express');
const path = require('path');
const connectMongoDB = require('./config/db.config');
const app = express();

const port = 3000;
const DIR_NAME = path.resolve(__dirname, '..', 'public');

app.use(express.static(DIR_NAME));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

