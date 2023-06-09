import { AppDataSource } from './database/data-source';

const express = require('express');
const app = express();

//Inicializa a conexão com o banco
AppDataSource.initialize()
  .then(() => {})
  .catch((error) => console.log(error));

app.get('/', function (req, res) {
  res.send('Olá, mundo!');
});

app.listen(3000, function () {
  console.log('O servidor está rodando na porta 3000!');
});
