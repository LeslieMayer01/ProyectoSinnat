const connection = require('./connection')
const client = connection.connection();

function login(data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
            console.log("Connected to PG Server!");
        });
        
        client.query(`SELECT administradorid, usuario,  password FROM administrador WHERE usuario='${data.usuario}' AND password = '${data.password}'`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })

    });
}

module.exports = {
    login
}