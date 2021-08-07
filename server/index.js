 
require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const connectMongoDB = require('./config/db.config');
const db = require('./config/db.config');

const app = express();

const port = 3000;
const DIR_NAME = path.resolve(__dirname, '..', 'public');

// Serve static files
app.use(express.static(DIR_NAME));

// parse request contents
app.use(express.json());

// Connect to mongodb database
mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to: ${db.url}`))
  .catch((err) => {
      console.log(`There was a problem connecting to ${db.url}`);
      console.log(err);
  })

// import routes
require('./routes/todo.routes')(app);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

