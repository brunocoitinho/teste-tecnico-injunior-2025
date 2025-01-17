let arrayNum = []
let qtdNum = parseInt(prompt('Seja bem vindo ao verificador de ordem! Quantos números você deseja inserir no vetor?'))
let count = 0


for (let i = 0; i < qtdNum; i++) {
    let num = parseInt(prompt(`Digite o ${i+1}º número`))
    arrayNum.push(num)
}

if (qtdNum > 1){
    for (let i = 1; i < arrayNum.length; i++) {
        if (arrayNum[i] > arrayNum[i-1]){
            count++
        }
        
    }
}

alert(count)