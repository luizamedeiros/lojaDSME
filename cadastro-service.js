const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Hello
app.get('/hello', (req, res) => {
 res.send('Hello World');
});

//Servidor
let porta = 8080;
app.listen(porta, () => {
 console.log('Servidor em execução na porta: ' + porta);
});

const Cadastro = require('./model/cadastro')

//Acesso ao BD
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://luizamedeiros:<password>@cluster0.gy2fa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const database_name = 'MinhaLojaDB';
const collection_name= 'Cadastro'
var db;
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
        if(error) {
            console.log('ERRO: não foi possível conectar à base de dados ` ' + database_name + ' `.');
            throw error;
        }
        db = client.db(database_name).collection(collection_name);
        console.log('Conectado à base de dados ` ' + database_name + ' `!');
    });
//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));