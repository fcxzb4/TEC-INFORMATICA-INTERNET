export function createHeader(){
    let header = document.getElementById('header')

    const logoProfession = document.createElement('div')
    logoProfession.id = 'logo_profession'

    const logo = document.createElement('div')
    logo.id = 'logo'
    logoProfession.appendChild(logo)

    const profession = document.createElement('h5')
    profession.id = 'profession'
    profession.textContent = 'Professor de Computação'
    logoProfession.appendChild(profession)

    header.appendChild(logoProfession)

    const btnsHeader = document.createElement('div')
    btnsHeader.id = 'btns_header'

    const button1 = document.createElement('button')
    button1.className = 'btn_header'

    button1.addEventListener('click', ()=>{
        window.location.href = './index.html'
    });

    const animation1 = document.createElement('div')
    animation1.className = 'animation'
    const icon1 = document.createElement('i')
    icon1.className = 'fa-solid fa-house'
    const title1 = document.createElement('h1')
    title1.textContent = 'HOME'
    animation1.appendChild(icon1)
    animation1.appendChild(title1)
    button1.appendChild(animation1)
    btnsHeader.appendChild(button1)

    const button2 = document.createElement('button')
    button2.className = 'btn_header'

    button2.addEventListener('click', ()=>{
        window.location.href = './projects.html'
    })

    const animation2 = document.createElement('div')
    animation2.className = 'animation'
    const icon2 = document.createElement('i')
    icon2.className = 'fa-solid fa-folder'
    const title2 = document.createElement('h1')
    title2.textContent = 'PROJETOS'
    animation2.appendChild(icon2)
    animation2.appendChild(title2)
    button2.appendChild(animation2)
    btnsHeader.appendChild(button2)

    const button3 = document.createElement('button')
    button3.className = 'btn_header'

    button3.addEventListener('click', ()=>{
        window.location.href = './formation.html'
    });
    const animation3 = document.createElement('div')
    animation3.className = 'animation'
    const icon3 = document.createElement('i')
    icon3.className = 'fa-solid fa-graduation-cap'
    const title3 = document.createElement('h1')
    title3.textContent = 'FORMAÇÃO'
    animation3.appendChild(icon3)
    animation3.appendChild(title3)
    button3.appendChild(animation3)
    btnsHeader.appendChild(button3)

    header.appendChild(btnsHeader)
}