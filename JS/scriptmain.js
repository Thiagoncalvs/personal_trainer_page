const target = document.querySelector('[data-colorlogo]')
const coloridoClassMore = 'Logo Colored'
const coloridoClassLess = 'Logo'

function ColorirScrollMobile() {
    const testeterceiro = document.querySelector('.PageThree').offsetLeft

    const windowLeft = document.querySelector('.EstruturaGeral').scrollLeft
    if ((windowLeft) == (testeterceiro)) {
        target.className = coloridoClassMore
    } else {
        target.className = coloridoClassLess
    }
}

function ColorirScrollDeskTop() {
    const testeterceiro = document.querySelector('.PageThree').offsetHeight

    const windowLeft = document.querySelector('.EstruturaGeral').scrollTop
    if ((windowLeft) === (testeterceiro)) {
        target.className = coloridoClassMore
    } else {
        target.className = coloridoClassLess
    }
}


function InicializacaoPaginaGeral() {
    const TamanhoJanela = window.innerWidth
    
    if (TamanhoJanela >= 1200) {
        document.querySelector('.EstruturaGeral').addEventListener('scroll', () => {
            ColorirScrollMobile()
        })
    } else {
        document.querySelector('.EstruturaGeral').addEventListener('scroll', () => {
            ColorirScrollDeskTop()
        })
    }
}

window.addEventListener('load', ()=>{
    InicializacaoPaginaGeral()
})