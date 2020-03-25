const express = require('express');
const routes = require('./routes');
const cors = require('cors');
/*
* Métodos HTTP:
* GET: Buscar/listar uma informação no back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/
/*
* TIPOS DE PARAMETROS ENVIADOS PRA ROTA
* Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação, podendo concatenar)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Dados adicionais (Corpo) utilizado para criar ou alterar recursos
*/
/*
* Bancos de Dados SQL
* MySQL, SQLite, PostegreSQL, Oracle, Micro
* NoSQL: MongoDB, CouchDB, etc
*/
/*
* COMUNICACAO COM O BANCO DE DADOS
* Driver: SELECT * FROM users
* Query Builder: table('users').select('*').where()
* USAREMOS O KNEX.JS
*/
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
