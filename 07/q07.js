const formPalindromo = document.getElementById("form-palindromo");
const inputPalindromo = document.getElementById("entrada-palindromo");
const txtResultado = document.getElementById("resultado");

formPalindromo.addEventListener("submit", function (e) {
    e.preventDefault();
    let txt = inputPalindromo.value.toLowerCase().replaceAll(' ', '')
    let resposta = ''
    if (!verificaPalindromo(txt)){
        resposta = 'não'
    }

    txtResultado.innerHTML = `<p>A frase ${resposta} é um palindromo</p>`
});

function verificaPalindromo(str){
    let limit = (str.length / 2)
    limit -= str.length % 1

    for (let i = 0; i < limit; i++) {
        if(str[i] != str[str.length-1-i]){
            return false
        }  
    }
    return true
}