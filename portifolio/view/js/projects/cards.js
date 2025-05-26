import { cards_bd } from "./../../../model/cards_bd.js";

export function createCards() {
    let cards_section = document.getElementById('cards')

    /*Cria 12 cartão*/

    for (let i = 0; i < cards_bd.length; i++) {
        let card = document.createElement('div');
        card.className = 'card'

        let card_container = document.createElement('div');
        card_container.className = 'card_container';

        let img = document.createElement('img');
        img.src = cards_bd[i].img;
        let nome = document.createElement('h1');
        nome.textContent = cards_bd[i].nome;
        let lenguages = document.createElement('h3');
        lenguages.textContent = cards_bd[i].lenguages;
        
        card_container.appendChild(img);
        card_container.appendChild(nome);
        card_container.appendChild(lenguages);
        
        card.appendChild(card_container);
        cards_section.appendChild(card);
    }
}