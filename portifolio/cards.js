export function createCards() {
    let cards_section = document.getElementById('cards')

    /*Cria 12 cartão*/

    for (let i = 0; i < 12; i++) {
        let div_cartao = document.createElement('div')
        div_cartao.className = 'card'

        let i_cartao = document.createElement('i')
        i_cartao.className = 'fa-solid fa-face-smile'

        let titulo_cartao = document.createElement('h1')
        titulo_cartao.textContent = 'Nome Produto'

        let valor_cartao = document.createElement('h4')
        valor_cartao.textContent = 'R$88,88'

        div_cartao.appendChild(i_cartao)
        div_cartao.appendChild(titulo_cartao)
        div_cartao.appendChild(valor_cartao)

        cards_section.appendChild(div_cartao)
    }
}