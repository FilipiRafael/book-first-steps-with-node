const http = require('http');

const operations = require('./operations');
const funcoes = require('./funcoes');

const manyFunctions = require('./funcoes2');
const adicao = require('./funcoes2').adicao;
const subtracao = require('./funcoes2').subtracao;

const server = http.createServer((request, response) => {

  console.log(funcoes(operations.var1));
  console.log(funcoes(operations.var2));

  console.log(adicao(10, 15));
  console.log(subtracao(50,40));
  console.log(manyFunctions.adicao(10,20));

});

server.listen(3000);