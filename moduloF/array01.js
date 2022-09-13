let num = [5,8,4]

/*num[3] = 6 - adiciona um valor em uma posição específica.

num.push(7) - acrescenta um valor ao final do array.

num.sort - coloca o array em ordem crescente.

num.length - mostra o tamanho do array.

console.log(num[0]) - mostra um elemento em sua posição específica*/

let pos = num.indexOf(4) //---> procura o valor e retorna sua chave(posição)
if (pos == -1){
    console.log('Ovalor não foi encontrado')
}else{
    console.log(`o valor está na posição ${pos}`)
}
