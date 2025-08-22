//ENTRADA E SAÍDA DE DADOS
// const input = require('prompt-sync')();

//Demonstração
//Saída de dados
// console.log("Olá mundo!");
//Entrada de dados
// let resposta = input("Diz olá pro mundo: ");
// console.log(`Você disse ${resposta}`);

//Desafio 1:
// Crie um script que recebe o nome, 
// sobrenome e cidade de um usuário em três 
// entradas separados. Depois, exiba uma unico 
// texto formatado como 'SOBRENOME, NOME mora 
// em CIDADE'.

//Resposta
// const input = require('prompt-sync')();
// let nome = input("Digite seu nome: ");
// let sobrenome = input("Digite seu sobrenome: ");
// let cidade = input("Digite sua cidade: ");
// console.log(`${sobrenome}, ${nome} mora em ${cidade}`);

//DESAFIO 2:
// Escreva um script que solicita ao usuário dois números
// e mostra a multiplicação desses dois números, após 
// isso solicita ao usuario novamente um número e mostra o 
// resultado da divisão entre a operação anterior e o novo 
// números;

//Resposta
// const input = require('prompt-sync')();
// let n1 = input("Digite um número: ");
// let n2 = input("Digite outro número: ");
// console.log(n1 * n2);
// let n3 = input("Digite só mais um: ");
// console.log((n1 * n2)/n3);

//DESAFIO 3
// Desenvolva um script que recebe três dados de um 
// produto: nome, quantidade em estoque e preço unitário, 
// usando três entradas. O script deve então calcular o 
// valor total do estoque desse produto. Exiba o total no 
// formato exato: 'Produto: [NOME DO PRODUTO] - Valor total 
// em estoque: R$[VALOR TOTAL]'. Depois pessa ao usuario um 
// valor de desconto em %. Aplique esse desconto ao produto e 
// reescreva a frase com o desconto, 'Produto: [NOME DO PRODUTO] 
// - Valor total com desconto: R$[VALOR TOTAL COM DESCONTO]'.

// Resposta
// const input = require('prompt-sync')();
// let nome_produto = input("Digite o nome do produto: ");
// let qnt_estoque = input("Digite a quantidade em estoque: ");
// let valor_produto = input("Digite o valor unitário do produto: ");
// let total_estoque = qnt_estoque * valor_produto;
// console.log(`Produto ${nome_produto} - Valor total em estoque: ${total_estoque}`);
// let desconto_porc = input("Digite a % de desconto: ");
// console.log(`Produto ${nome_produto} - Valor total com desconto: ${total_estoque - (total_estoque * (desconto_porc / 100))}`);
