function contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('[ERRO]: Passo Inválido!')
        }

        if(i < f){
          for(let c =i; c <= f; c += p){
            res.innerHTML += ` ${c} `
        }  
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} `
            }
        }

        
    }
}