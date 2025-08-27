//OPERADORES MATEMATICOS E LÓGICOS E CONDICIONAIS 

//Demonstração
//Comparação ==, ===, >, <, >=, <=.
//Lógicos 'ou': ||, 'e': &&, 'não': !.

//Simples
//if(regra){
//   consequência;
//}

//Composta
//if(regra){
//   consequência caso verdade;
//}else{
//   consequência caso falso;
//}


//Desafio 1:
// Faça um algoritmo que simule a autorização de um cofre. 
// O script deve solicitar três informações:
// A senha,um código numérico e um token de segurança.
// O cofre só abrirá se todas as seguintes condições forem verdadeiras, 
// validadas em uma única estrutura condicional:
// A senha não pode estar vazia e deve ter mais de 8 caracteres.
// O código numérico deve ser um número par e maior que 1000.
// O token de segurança deve ser estritamente igual (===) à string 
// "TOKEN123". O algoritmo deve imprimir no console "Acesso liberado" 
// ou "Acesso negado".

//Resposta:
const input = require('prompt-sync')();
let senha = input("Digite a senha: ");
let chave = input("Digite a chave: ");
let token = input("Digite o token: ");

if (
    (senha != undefined && senha.length > 8)
    && (chave % 2 == 0 && chave > 1000)
    && (token === 'TOKEN123')
) {
    console.log("Acesso Lierado!");
}else{
    console.log("Acesso Negado!");
}

//Desafio 2:
// Faça um algoritmo que determine se um candidato está qualificado
// para duas vagas de emprego diferentes (Vaga A e Vaga B) com base
// em sua idade e se possui ou não ensino superior. O script deve
// solicitar a idade e se possui ensino superior ('sim' ou 'nao').
// O algoritmo deve imprimir "Qualificado" se qualquer uma das
// seguintes condições for atendida:
// Para a Vaga A: O candidato tem entre 25 e 45 anos (inclusivo)
// e possui ensino superior.
// Para a Vaga B: O candidato tem menos de 25 anos OU tem mais
// de 50 anos, e não importa se possui ensino superior.
// Se nenhuma dessas condições for atendida, deve imprimir
// "Não qualificado". Use uma única estrutura condicional para
// avaliar todos os cenários.

//Desafio 3:
// Faça um algoritmo que verifique a validade de um cupom de desconto.
// O script deve solicitar o código do cupom e o valor da compra.
// Um cupom é considerado válido e a mensagem "Cupom aplicado
// com sucesso!" deve ser exibida se a seguinte condição
// for verdadeira:
// O código do cupom NÃO é estritamente igual a "INVALIDO" e
// (o valor da compra é exatamente 100.50 ou o valor da compra
// é maior que 500).
// Para todos os outros casos, a mensagem "Cupom inválido ou
// não aplicável." deve ser exibida.