const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const routes = require('./routes')

const app = express()

const mongourl = PUT YOUR URL HERE

mongoose.connect(mongourl, {useUnifiedTopology: true, useNewUrlParser: true})

app.use(cors());
app.use(express.json())
app.use(routes)

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros: 
// Query Params: request.query (filtros, ordenacao,paginacao...)
// Route Params: request.params (identificar um recurso na alteraçao ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



app.listen(3333)
