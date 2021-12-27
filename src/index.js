const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const myUser = {
    email: "MatiasPena93@hotmail.com",
    password: "155524400"
}

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

app.use('/api/product', productRoutes());

app.listen(process.env.PORT || 4000, () => {
  console.log(`Productos - MCGA - Running on PORT: ${process.env.PORT || 4000}`);
}); 