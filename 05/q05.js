const formFizzbuzz = document.getElementById("form-fizzbuzz");
const inputFizzbuzz = document.getElementById("entrada-fizzbuzz");
const txtResultado = document.getElementById("resultado");

formFizzbuzz.addEventListener("submit", function (e) {
    e.preventDefault();
    let num = parseInt(inputFizzbuzz.value);
    
    try{
        txtResultado.innerHTML = `<p>${geraFizzbuzz(num)}</p>`
        inputFizzbuzz.value = ''
    }catch(error){
        alert(error.message)
        location.reload()
    } 
});

function geraFizzbuzz(a) {
    if (a % 1 != 0){
        throw new Error('Só são aceitos valores inteiros')
    }
    let result = '';
    if (a % 3 == 0){
        result += 'fizz'
    }
    if (a % 5 == 0){
        result += 'buzz'
    }
    return result;
}