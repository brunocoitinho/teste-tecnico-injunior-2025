const formConversor = document.getElementById("form-conversor");
const inputReal = document.getElementById("entrada-real");
const txtResultado = document.getElementById("resultado");

formConversor.addEventListener("submit", function (e) {
    e.preventDefault();
    let reais = parseFloat(inputReal.value).toFixed(2);
    let euros = reais * 6.1
    let dolar = reais * 5.7
    
    txtResultado.innerHTML = `<p>O seu valor de R$${reais.toString().replace('.', ',')} equivale a €${euros.toFixed(2).toString().replace('.', ',')} ou U$${dolar.toFixed(2).toString().replace('.', ',')}</p>`
});