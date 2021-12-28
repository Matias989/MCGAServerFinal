const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database: MCGA FINAL`);
  })
  .catch((e) => {
    console.error(e);
  });

const product = require('../models/product');
