const connection = require('./connection')
const client = connection.connection.connection();

function addAdministrator(data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`INSERT INTO administrador (usuario, password) VALUES ('${data.usuario}', '${data.password}')`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function updateAdministrator(id, data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`UPDATE administrador SET usuario='${data.usuario}', password='${data.password}' WHERE administradorid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function getAdministrator(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT administradorid, usuario, password FROM administrador WHERE administradorid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function listAdministrators(){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT administradorid, usuario,  password FROM administrador`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function deleteAdministrator(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`DELETE FROM administrador WHERE administradorid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

module.exports = {
    addAdministrator,
    updateAdministrator,
    getAdministrator,
    listAdministrators,
    deleteAdministrator
}