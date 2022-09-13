function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${hora}:${minuto}.`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#ffff98'
    } else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = '#f3c369'
    }else{
        img.src = 'noite.png'
        document.body.style.background = '#222263'
    }

}