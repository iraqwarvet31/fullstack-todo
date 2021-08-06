 
const express = require('express');
const app = express();
const path = require('path');

const port = 3000;
const DIR_NAME = path.resolve(__dirname, '..', 'public');

app.use(express.static(DIR_NAME));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});