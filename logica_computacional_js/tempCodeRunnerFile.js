const input = require('prompt-sync')();

function mostrarExtrato(valor) {
    console.log(`Seu saldo atual é de: ${valor}`);
}

function mostrarMenu() {
    console.log("[3]Saque");
    console.log("[2]Deposito");
    console.log("[1]Extrato");
    console.log("[0]Sair");
}

function pedirValor() {
    return parseFloat(input("Digite quanto: "));
}

function saque(valorConta) {
    let valorPedido = pedirValor()
    if ((valorConta - valorPedido) < 0) {
        console.log("Valor maior que o saldo:");
        return valorConta;
    } else {
        return valorConta - valorPedido;
    }
}

function deposito(valorConta) {
    return valorConta + pedirValor();
}

function caixaEletronico(valorConta) {
    let op;
    do {
        mostrarMenu();
        op = input("Escolha uma OP");

        switch (op) {
            case '3':
                valorConta = saque(valorConta);
                mostrarExtrato(valorConta);
                break;
            case '2':
                valorConta = deposito(valorConta);
                mostrarExtrato(valorConta);
                break;
            case '1':
                mostrarExtrato(valorConta);
                break;
            case '0':
                console.log('Saindo');
                break;
            default:
                console.log('Opção de menu invalida, tente novamente');
                break;
        }
    } while (op != 0);
}

let op;
do {
    console.log("[3]Bryam");
    console.log("[2]Gabriel");
    console.log("[1]Lucas");
    console.log("[0]Sair");
    op = input("Escolha uma OP");

    switch (op) {
        case '3':
            caixaEletronico(115);
            break;
        case '2':
            caixaEletronico(300);
            break;
        case '1':
            caixaEletronico(5);
            break;
        case '0':
            console.log('Saindo');
            break;
        default:
            console.log('Opção de menu invalida, tente novamente');
            break;
    }
} while (op != 0);
