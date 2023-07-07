const connection = require('./connection')
const client = connection.connection();

function addProduct(data) {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`INSERT INTO inventario (nombre, precio, cantidad) VALUES ('${data.nombre}', '${data.precio}', ${data.cantidad})`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err => {
            console.log(err);
            client.end();
        })
    });
}

function updateProduct(id, data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`UPDATE inventario SET nombre='${data.nombre}', precio='${data.precio}', cantidad=${data.cantidad} WHERE articuloid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function getProduct(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM inventario WHERE articuloid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function listProducts(){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM inventario`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function deleteProduct(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`DELETE FROM inventario WHERE articuloid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

module.exports = {
    addProduct,
    updateProduct,
    getProduct,
    listProducts,
    deleteProduct,
}