//função que adiciona a classe icone às tags ion-icon
function classe_icone(){
    icone = document.querySelectorAll('ion-icon')
    for(let i = 0; i < icone.length; i++){
        icone[i].className = 'icone';
    }
}

function darkmode (){
    var raiz = document.querySelector('html')
    raiz.classList.toggle('darkmode')
}

classe_icone()