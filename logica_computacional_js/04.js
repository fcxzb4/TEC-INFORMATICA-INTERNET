//ESTRUTURA CONDICIONAL e SWICH CASE

// Crie um algoritmo que que recebe uma idade e classifica se 
// a pessoa é, bebê 0 - 3, criança 4 - 11, adolencente 12 - 18, 
// jovem 19 - 25, adulto 26 - 59, idoso 60 - 80 ou ancião 80->.

// const input = require('prompt-sync')();
// let idade = input("Digite sua idade: ")

// if(idade >= 0 && idade <= 3){
//     console.log("Você é um BB");
// }else if(idade > 3 && idade <= 11){
//     console.log("Você é uma criança");
// }else if(idade > 11 && idade <= 18){
//     console.log("Você é um adolecente");
// }else if(idade > 18 && idade <= 25){
//     console.log("Você é um jovem");
// }else if(idade > 25 && idade <= 59){
//     console.log("Você é um adulto");
// }else if(idade > 60 && idade <= 80){
//     console.log("Você é um idoso");
// }else if(idade > 80 && idade <= 135){
//     console.log("Você é um ancião");
// }else{
//     console.log("Você mentiu a sua idade...");
// }

// Crie um algoritmo onde você recebe uma nota
// em A (9 - 10), B (8 - 9), C (6 - 8), D (4 - 6)
// e F( 0 - 4) e classifique.

const input = require('prompt-sync')();
let nota = input("Digite sua nota: ").toUpperCase();

switch (nota) {
    case 'A':
        console.log("Nota entre 9 e 10");
        break;
    case 'B':
        console.log("Nota entre 8 e 9");
        break;
    case 'C':
        console.log("Nota entre 6 e 8");
        break;
    case 'D':
        console.log("Nota entre 4 e 8");
        break;
    case 'F':
        console.log("Nota entre 0 e 4");
        break;
    default:
        console.log("Nota invalida");
        break;
}