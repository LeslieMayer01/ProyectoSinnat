const connection = require('./connection')
const client = connection.connection();

function addGuardian(data) {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`INSERT INTO acudientes (nombre, apellido, cedula, correo, direccion, telefono, forma_pago) VALUES ('${data.nombre}', '${data.apellido}', ${data.cedula}, '${data.correo}', '${data.direccion}', '${data.telefono}', '${data.forma_pago}')`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err => {
            console.log(err);
            client.end();
        })
    });
}

function updateGuardian(id, data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`UPDATE acudientes SET nombre='${data.nombre}', apellido='${data.apellido}', cedula='${data.cedula}', correo='${data.correo}', direccion='${data.direccion}', telefono='${data.telefono}', forma_pago='${data.forma_pago}' WHERE acudientesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function getGuardian(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM acudientes WHERE acudientesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function listGuardians(){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM acudientes`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function deleteGuardian(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`DELETE FROM acudientes WHERE acudientesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

module.exports = {
    addGuardian,
    updateGuardian,
    getGuardian,
    listGuardians,
    deleteGuardian,
}