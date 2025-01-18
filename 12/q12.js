
alert('Esse é o buscador de elementos únicos em array')
let vet = [6,1,3,2,1,7,6,7,3]
alert(`Exemplo: Vamos encontrar o elemento único do array [${vet}]`)
alert(`O elemento único desse array é ${encontrarElementoUnico(vet)}`)

function encontrarElementoUnico(arr){
    let elementos = arr.sort()
    let repetidos = []
    for (let i = 1; i < elementos.length; i++) {
        if(elementos[i] == elementos[i-1]){
            repetidos.push(elementos[i])
        }
    }
    for (let i = 0; i < repetidos.length; i++) {
        let indexRep = elementos.indexOf(repetidos[i])
        elementos.splice(indexRep,2)
        console.log(elementos)
    }

    return elementos
}