function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.getElementById('res')

    if (fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamene!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 18){
                img.setAttribute('src', 'menino.png')
            } else if (idade >= 18 && idade < 65){
                img.setAttribute('src', 'adulto.png')
            } else{
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 18){
                img.setAttribute('src', 'menina.png')
            } else if (idade >= 18 && idade < 65){
                img.setAttribute('src', 'adulta.png')
            } else{
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}