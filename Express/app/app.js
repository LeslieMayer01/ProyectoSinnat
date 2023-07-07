const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

//Login
const loginAdmin = require ('./routes/login');
const administrators = require ('./routes//administrator');
const students = require('./routes/students');
const guardians = require('./routes/guardians');
const products = require('./routes/products');

const app = express()
  .use(cors({credentials: true, origin: 'http://localhost:4200'}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(cookieParser())
  .use(bearerToken())
  .use(fileUpload());


app.use('/login', loginAdmin);
app.use('/administrators', administrators);
app.use('/students', students);
app.use('/guardians', guardians);
app.use('/products', products);


module.exports = app;

