const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const http = require('http');

const routes = require('./routes')
const config = require('./config')
const { setupWebsocket } = require('./websocket');

const mongourl = config.mongourl
mongoose.connect(mongourl, {useUnifiedTopology: true, useNewUrlParser: true})


const app = express()
const server = http.Server(app);

setupWebsocket(server);

app.use(cors());
app.use(express.json())
app.use(routes)

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros: 
// Query Params: request.query (filtros, ordenacao,paginacao...)
// Route Params: request.params (identificar um recurso na alteraçao ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)



server.listen(3333);
