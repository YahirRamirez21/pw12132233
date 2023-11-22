var express = require('express');
var mysql = require('mysql');
var app = express();
app.use(express.json);


// Configurar la conexion
var conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'pw1213'
});

// Probar conexion
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("Conectado a la base de datos");
    }
});

app.get("/", function(req, res) {
    res.send("<h1>Ruta de inicio</h1>");
});

app.get("api/maestros", function(req, res){
    conexion.query("SELECT * FROM maestros", (error, filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas)
        }
    });
});

app.get("api/maestros", function(req, res){
    conexion.query("SELECT * FROM maestros WHERE clave = ? LIMIT 1", [request.param.id], (error, filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

// Encender el servidor
app.listen('3000', (req, res) => {
    console.log("Servidor en puerto 3000");
});

app.post("api/maestros", (req, res) => {
    let data = { clave: req.body.cla,
    nombre: req.body.nom,
    departamento: req.body.dep,
    estatus: req.body.est}
    let sql = "INSERT INTO maestros SET ?";
    conexion.query(sql, data, (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

app.put('api/maestros/:id', (req,res)=>{
    let clave = req.params.id;
    let nombre = req.params.nom;
    let departamento  = req.params.dep;
    let estatus = req.body.est;
    let sql = "UPDATE maestros SET nombre = ?, departamento =?, estatus=? WHERE clave=?";
    conexion.query(sql, [nombre, departamento,estatus], (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});

