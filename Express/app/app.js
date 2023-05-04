const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bearerToken = require('express-bearer-token');
const cookieParser = require('cookie-parser');

const addEstudiantes = require('./routes/addEstudiantes'); 
const addAcudientes = require('./routes/addAcudientes'); 
const addProductos = require('./routes/addProductos'); 
const fileUpload = require('express-fileupload');
const productos = require('./routes/productos'); 
const listaProductos = require('./routes/listaProductos');
const emails = require('./routes/emails');
const verificacion = require('./routes/verificacion');
const listaEstudiantes = require('./routes/listaAcudientes');
const listaAcudientes = require('./routes/listaEstudiantes');
const estudiantes = require('./routes/estudiantes');
const administrators = require ('./routes/administrators');
const loginAdmin = require ('./routes/loginAdmin');
const acudientesInfo = require('./routes/acudientesInfo');
const productosInfo = require('./routes/productosInfo');
const usuariosInfo = require('./routes/usuariosInfo');
const estudiantesInfo = require('./routes/estudiantesInfo');
const date = require('./routes/date');
const dateEstudiantes = require('./routes/dateEstudiantes');
const dateAcudientes = require('./routes/dateAcudientes');
const dateProductos = require('./routes/dateProductos');
const dateAdmin = require('./routes/dateAdmin');
const deleteUser = require('./routes/deleteUser');
const deleteEstudiantes = require('./routes/deleteEstudiantes');
const deleteAcudientes = require('./routes/deleteAcudientes');
const deleteProductos = require('./routes/deleteProductos');
const correo = require('./routes/correo');

const app = express()
  .use(cors({credentials: true, origin: 'http://localhost:4200'}))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({extended: true}))
  .use(cookieParser())
  .use(bearerToken())
  .use(fileUpload());

app.use('/addEstudiantes', addEstudiantes);
app.use('/addProductos', addProductos);
app.use('/listaEstudiantes', listaEstudiantes);
app.use('/listaProductos', listaProductos);
app.use('/addAcudientes', addAcudientes);
app.use('/productos', productos);
app.use('/emails', emails);
app.use('/verificacion', verificacion);
app.set('view engine', 'ejs');
app.use('/listaAcudientes', listaAcudientes);
app.use('/estudiantes', estudiantes);
app.use('/administrators', administrators);
app.use('/loginAdmin', loginAdmin);
app.use('/estudiantesInfo', estudiantesInfo);
app.use('/acudientesInfo', acudientesInfo);
app.use('/productosInfo', productosInfo);
app.use('/usuariosInfo', usuariosInfo);
app.use('/date', date);
app.use('/dateEstudiantes', dateEstudiantes);
app.use('/dateProductos', dateProductos);
app.use('/dateAcudientes', dateAcudientes);
app.use('/dateAdmin', dateAdmin);
app.use('/deleteUser', deleteUser);
app.use('/deleteEstudiantes', deleteEstudiantes );
app.use('/deleteAcudientes', deleteAcudientes);
app.use('/deleteProductos', deleteProductos);
app.use('/correo', correo);

module.exports = app;

