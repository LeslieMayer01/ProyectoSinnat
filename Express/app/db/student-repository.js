const connection = require('./connection')
const client = connection.connection();

function addStudent(data) {
    return new Promise((resolve, reject) => {
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`INSERT INTO estudiantes (nombre, identificacion, edad, fecha_nacimiento, ultimo_grado, escuela, referido, nombre_referido, horario_dia, horario_hora, acudiente) VALUES ('${data.nombre}', '${data.identificacion}', ${data.edad}, '${data.fecha_nacimiento}', '${data.ultimo_grado}', '${data.escuela}', '${data.referido}', '${data.nombre_referido}', '${data.horario_dia}', '${data.horario_hora}', '${data.acudiente}')`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err => {
            console.log(err);
            client.end();
        })
    });
}

function updateStudent(id, data){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`UPDATE estudiantes SET nombre='${data.nombre}', identificacion='${data.identificacion}', edad=${data.edad}, fecha_nacimiento='${data.fecha_nacimiento}', ultimo_grado='${data.ultimo_grado}', escuela='${data.escuela}', referido='${data.referido}', nombre_referido='${data.nombre_referido}', horario_dia='${data.horario_dia}', horario_hora='${data.horario_hora}' WHERE estudiantesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function getStudent(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM estudiantes WHERE estudiantesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function listStudents(){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`SELECT * FROM estudiantes`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

function deleteStudent(id){
    return new Promise((resolve,reject)=>{
        client.connect((err) => {
            if (err) throw err;
        });
        client.query(`DELETE FROM estudiantes WHERE estudiantesid=${id}`).then(response => {
            resolve(response.rows);
            client.end();
        }).catch(err =>{
            console.log(err);
            client.end();
        })
    });
}

module.exports = {
    addStudent,
    updateStudent,
    getStudent,
    listStudents,
    deleteStudent,
}