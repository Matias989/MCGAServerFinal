const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({ path: '.env' });

/* MONGOOSE */
require('./config/DataBase');

/* EXPRESS */
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* BODY-PARSER */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CORS*/
app.use(cors());

/* ROUTES */
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');

app.use('/api/product', productRoutes());
app.use('/api/login', userRoutes());

app.listen(process.env.PORT || 4000, () => {
  console.log(`Productos - MCGA - Running on PORT: ${process.env.PORT || 4000}`);
}); 