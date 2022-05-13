const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const connection = require("./database/database");

const Experiencia = require("./expreriencia/Experiencia")

//cria a conexão
connection
    .authenticate()
    .then(()=>{
        console.log("A conexão foi criado com suecesso.")
    })
    .catch((msgErro)=>{
        console.log(msgErro);
    })

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json());

app.get("/", function(req, res){
    res.render("index");
});

app.get("/admin/home", function(req, res){
    res.render("admin/home/index");
});

app.listen(8080, ()=>{
    console.log("O servidor está rodando.");
});