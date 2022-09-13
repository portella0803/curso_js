let amigo = {nome:'jose',
sexo:'m',
peso: 28.8,
engordar(p=0){
    console.log(`engordou ${p}kg`)
    this.peso += p
}
}
amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}kg`)