const { Client} = require("pg")
const CREDENTIALS = require('../config/pg')
const bcrypt = require('bcryptjs');

function connection() {;
    const client = new Client(CREDENTIALS)
    return client;
}

function usuarios(data) {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to PG Server!");
      });
      
      let hashPass = bcrypt.hashSync(data.password, 8);
      data.password = hashPass;
      let insert = 'INSERT INTO usuarios(usuario, password,nombre, correo, telefono, password, estadoCuenta) VALUES(?,?,?,?,?,?,?)';   
      let query = pg.format(insert,[data.usuario, data.password, data.nombre, data.correo, data.telefono,  "inactivo"]);
      
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
}
 
function changePassword(data) {
//   return new Promise((resolve, reject) => {
//     const mysqlConnection = connection();
//     mysqlConnection.connect((err)=>{
//       if(err) throw err;
//       console.log("Connected to MySQL Server!");
//     });
//     let hashPass1 = bcrypt.hashSync(data.password1, 8);
//     data.password1 = hashPass1;
//     let update = 'UPDATE usuarios set password=password1 WHERE usuario=? AND correo=?'
//     let query = mysql.format(update,[data.password1]);
//     mysqlConnection.query(query, (error, result) => {
//       if (error) reject (error);
//       console.log(error);
//       mysqlConnection.end();
//       resolve(result)
//       console.log(result);
//     });
//   });
}

function loginAdmin(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT idadmin, usuario,  password FROM admon WHERE usuario=? AND estadoCuenta = ?';
    let query = mysql.format(select,[data.usuario, "activo"]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function addEstudiantes(data) {
  return new Promise((resolve, reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    
    let insert = 'INSERT INTO estudiantes (estudianteid, nombre, identificacion, edad, fecha_nacimiento, ultimo_grado, escuela, referido, nombre_referido, horario_dia, horario_hora, acudiente) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)';   
    let query = mysql.format(insert,[data.estudianteid,data.nombre, data.identificacion, data.edad, data.fecha_nacimiento, data.ultimo_grado, data.escuela, data.referido, data.nombre_referido, data.horario_dia, data.horario_hora, data.acudiente]);

      mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      mysqlConnection.end();
      resolve(result);
  
    });
  });
}

function addAcudientes(data) {
  return new Promise((resolve, reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    
    let insert = 'INSERT INTO acudientes (acudienteid, nombre, apellido, cedula, correo, direccion, telefono, forma_pago) VALUES(?,?,?,?,?,?,?,?)';   
    let query = mysql.format(insert,[data.acudienteid, data.nombre, data.apellido, data.cedula, data.correo, data.direccion, data.telefono, data.forma_pago]);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      mysqlConnection.end();
      resolve(result);
      console.log(result);
    });
  });
}
  
  function addProductos(data) {
  return new Promise((resolve, reject)=>{
    const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
    
      let insert = 'INSERT INTO inventario (articuloid, nombre, precio, cantidad) VALUES(?,?,?,?)';   
      let query = mysql.format(insert,[data.articuloid, data.nombre, data.precio, data.cantidad]);

        mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
  
    });
  });
}

function verificar(data) {
  return new Promise((resolve, reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = `SELECT administradorid FROM administrador WHERE usuario = ?`;
    let query = mysql.format(select,[data.usuario]);
    console.log(query);
    mysqlConnection.query(query, (error, result) => {
      if (error) reject(error);
      mysqlConnection.end();
      
      resolve(result);
      let id = result[0].administradorid;
      activar(id);
    });
  });
}

function activar(data){
  {
    return new Promise((resolve, reject)=>{
      const mysqlConnection = connection();
      mysqlConnection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Server!");
      });
      let update = `UPDATE administrador SET estadoCuenta = "activo" WHERE administradorid = ?`;
      let query = mysql.format(update,[data]);
      console.log(query);
      mysqlConnection.query(query, (error, result) => {
        if (error) reject(error);
        mysqlConnection.end();
        resolve(result);
   
     });
    });
  }
}

function estudiantes(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Error Connecting to Postgrest Server!");
    });

    let select = 'SELECT * FROM estudiantes WHERE estudianteid = ? ';
    let query = mysql.format(select,['1']);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function acudientes(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM acudientes WHERE acudienteid = ? ';
    let query = mysql.format(select,[data.idmascota]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function productos(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM inventario WHERE inventarioid = ? ';
    let query = mysql.format(select,[data.idmascota]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

function usuariosInfo(){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });

    client.query('SELECT * FROM administrador').then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
    
  });
}

function estudiantesInfo(){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });

    client.query('SELECT * FROM estudiantes').then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
    
  });
}
function acudientesInfo(){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });

    client.query('SELECT * FROM acudientes').then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
    
  });
}
function productosInfo(){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });

    client.query('SELECT * FROM inventario').then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
  });
}


function consultaDateAdmin(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT *  FROM administrador WHERE administradorid =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}
function dateEstudiantes(data){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });
    client.query(`SELECT * FROM estudiantes WHERE estudianteid =${data}`).then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
  });
}
function dateAcudientes(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM acudientes WHERE acudienteid =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    console.log(result);
    resolve(result);

  });
  });
}
function dateProductos(data){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let select = 'SELECT * FROM inventario WHERE inventarioid =?';
    let query = mysql.format(select,[data]);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    console.log(result);
    resolve(result);

  });
  });
}

function deleteUser(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM administrador WHERE administradorid = ?';
    let query = mysql.format(DELETE, id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deleteEstudiantes(id){
  return new Promise((resolve,reject)=>{
    const client = connection();
    client.connect((err) => {
      if (err) throw err;
      console.log("Connected to PG Server!");
    });
    client.query(`DELETE FROM estudiantes WHERE estudianteid =${id}`).then(response => {
      console.log(response.rows)
      resolve(response.rows);
      client.end();
    }).catch(err =>{
      console.log(err);
      client.end();
    })
  });
}
function deleteAcudientes(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM acudientes WHERE acudienteid =?';
    let query = mysql.format(DELETE,correo);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}
function deleteProducto(id){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });
    let DELETE = 'DELETE FROM inventario WHERE inventarioid =?';
    let query = mysql.format(DELETE,id);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
    console.log(result);
  });
  });
}


function minilista(){
  return new Promise((resolve,reject)=>{
    const mysqlConnection = connection();
    mysqlConnection.connect((err) => {
      if (err) throw err;
      console.log("Connected to MySQL Server!");
    });

    let select = 'SELECT * FROM mascotas WHERE idestado = ? ';
    let query = mysql.format(select,['2']);
    mysqlConnection.query(query, (error, result) => {
    if(error) reject (error);
    console.log(error);
    mysqlConnection.end();
    resolve(result);
  });
  });
}

module.exports = {
    connection,
    usuarios,
    loginAdmin,
    estudiantes,
    acudientes,
    productos,
    dateProductos,
    verificar, 
    activar,
    deleteProducto,
    deleteEstudiantes,
    deleteAcudientes,
    //administrador,
    loginAdmin,
    usuariosInfo,
    estudiantesInfo,
    acudientesInfo,
    productosInfo,
    dateEstudiantes,
    dateAcudientes,
    dateProductos,
    addEstudiantes,
    addAcudientes,
    addProductos,
    consultaDateAdmin,
    deleteUser,
    deleteEstudiantes,
    deleteAcudientes,
    deleteProducto,
    changePassword,
 
  }