const formFibo = document.getElementById("form-fibonacci");
const inputFibo = document.getElementById("entrada-fibonacci");
const txtResultado = document.getElementById("resultado");

formFibo.addEventListener("submit", function (e) {
    e.preventDefault();
    let num = parseInt(inputFibo.value);
    
    try{
        plural = num > 1 ? 's' :  ''
        txtResultado.innerHTML = `O${plural} primeiro${plural} ${num} elemento${plural} da sequência de fibonacci: ${fibonacci(num)}`
    }catch(error){
        alert(error.message)
        location.reload()
    } 
});


function fibonacci(a) {
    if (a <= 0 || a % 1 != 0){
        throw new Error('Só são aceitos valores inteiros e positivos')
    }
    let fiboList = new Array

    if (a == 1) {
        fiboList.push(0)
        return fiboList
    }
    if (a == 2){
        fiboList.push(0)
        fiboList.push(1)
    }
    if (a > 2){
        fiboList = fibonacci(a-1)
        fiboList.push(fiboList[fiboList.length-1] + fiboList[fiboList.length-2])
    }

    return fiboList;
}
