const target = document.querySelector('[data-colorlogo]')
const coloridoClassMore = 'Logo Colored'
const coloridoClassLess = 'Logo'

const SpanLineThree = document.querySelector('#SpanLineThree')


function ColorirScrollMobile() {
    const testeterceiro = document.querySelector('.PageTwo').offsetLeft + ((document.querySelector('.PageTwo').offsetLeft * 3) / 7)

    const windowLeft = document.querySelector('.EstruturaGeral').scrollLeft
    if ((windowLeft) > (testeterceiro)) {
        target.className = coloridoClassMore
    } else {
        target.className = coloridoClassLess
    }

    console.log(testeterceiro)
}

function ColorirScrollDeskTop() {
    const testeterceiro = document.querySelector('.PageTwo').offsetTop + ((document.querySelector('.PageTwo').offsetTop * 3) / 4)

    const windowLeft = document.querySelector('.EstruturaGeral').scrollTop

    if ((windowLeft) > (testeterceiro)) {
        target.className = coloridoClassMore
    } else {
        target.className = coloridoClassLess
    }
}


function InicializacaoPaginaGeral() {
    const TamanhoJanela = window.innerWidth
    
    if (TamanhoJanela < 1200) {
        document.querySelector('.EstruturaGeral').addEventListener('scroll', () => {
            ColorirScrollMobile()
        })
    } else {
        document.querySelector('.EstruturaGeral').addEventListener('scroll', () => {
            ColorirScrollDeskTop()
        })
        SpanLineThree.style.display = 'inline'
    }
}

window.addEventListener('load', ()=>{
    InicializacaoPaginaGeral()
})