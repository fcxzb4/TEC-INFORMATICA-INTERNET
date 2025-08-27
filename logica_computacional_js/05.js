//INTRODUÇÃO A LAÇÕS DE REPETIÇÃO

//Laço que conta voltas (PARA)
// for(let i = 0; i < 10; i++){
//     console.log(`Volta ${i + 1}`);
// }

//Laço de testes (ENQUANTO)
// const area = 5;
// const b = 5;
// let h = 1;
// let tentativas = 0;
// while ( (b * h) != area){
//     h++;
//     tentativas++;
// }
// console.log(`Para area ${area} base é ${b} e altura é ${h} ,t: ${tentativas}`);

//Laço com usuario (FAÇA ENQUANTO)
// const input = require('prompt-sync')();
// let senha;
// do {
//     senha = input("Digite a senha: ");
// } while (senha != '12346578');


// Crie um questionario de 20 perguntas sobre laços de
// repetição com java script, crie pergntas teoricas, 
// ache o erro, qual a saida e qual o codigo, evite
// conteudos como laços de repetição, arrays, e objetos.

// Crie um questionario de 20 perguntas sobre laços de
// repetição com java script, crie pergntas teoricas, 
// ache o erro, qual a saida e qual o codigo, use apenas
// laços, condicionais e entrada e saida de dados, evite
// o uso de arrays e objetos.

// Desaio 1: (Laço for)
// Faça um algoritmo que funcione como um processador de dados numéricos.
// Primeiro, o script deve perguntar ao usuário quantos números ele 
// deseja inserir. Em seguida, usando um laço for, o script deve solicitar 
// cada um desses números. Durante a entrada de dados, o algoritmo deve 
// calcular e armazenar em variáveis separadas:
// A soma de todos os números pares inseridos.
// A contagem de todos os números ímpares inseridos.
// O maior número inserido até o momento.
// Ao final do laço, o algoritmo deve exibir os três resultados calculados.

// Desafio 2: (Laço while)
// Faça um algoritmo que simule um caixa de supermercado. O script deve 
// solicitar o preço de produtos um a um, continuamente, usando um laço 
// while. O laço deve parar apenas quando o usuário digitar 0 como preço.
// O algoritmo deve manter um somatório do valor total da compra. 
// Após o término do laço, se o valor total da compra ultrapassar 
// R$ 150,00, um desconto de 10% deve ser aplicado. Por fim, exiba o 
// subtotal da compra (soma dos preços), o valor do desconto (se houver) 
// e o valor final a ser pago.

// Desaio 3:(Laço do while)
// Faça um algoritmo que implementa uma trava de segurança por tentativas. 
// O script deve definir uma senha secreta (string) e um número máximo 
// de tentativas (por exemplo, 3) no início do código. Usando um laço 
// do-while, o script deve solicitar a senha ao usuário. A cada tentativa 
// incorreta, ele deve exibir uma mensagem "Senha incorreta. Você tem 
// X tentativa(s) restante(s)." e decrementar o contador de tentativas. 
// O laço deve continuar enquanto a senha inserida estiver incorreta 
// E o usuário ainda tiver tentativas restantes. Ao final, se o usuário 
// acertou a senha, exiba "Acesso concedido.". Se as tentativas se 
// esgotarem, exiba "Acesso bloqueado.".