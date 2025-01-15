const formIdades = document.getElementById("form-idades");
const inputData = document.getElementById("entrada-idade");
const txtResultado = document.getElementById("resultado");
const btnIdade = document.getElementById("btn-nova-idade");
const btnClear = document.getElementById("btn-clear-idades");
let datasNascimento = [];

btnIdade.addEventListener("click", function (e) {
    try {
        if (inputData.value == "") {
            throw new Error(
                "Não é impossivel registrar sem indicar uma data de nascimento"
            );
        }
        let nasc = inputData.value.split("-");
        if(calculaIdade(nasc[0], nasc[1], nasc[2]) < 0){
            throw new Error("A data de Nascimento tem que ser maior ou igual a data de hoje");
        }

        datasNascimento.push(nasc);
        let index = datasNascimento.length;

        txtResultado.innerHTML += `<p>Pessoa ${index} - Data de Nascimento ${nasc[2]}/${nasc[1]}/${nasc[0]}<span id='pessoa${index - 1}'><span></p>`;
        inputData.value = "";
    } catch (error) {
        alert(error.message);
    }
});

btnClear.addEventListener("click", function (e) {
    location.reload();
});

formIdades.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
        verificarIdades(datasNascimento);
        for (let i = 0; i < datasNascimento.length; i++) {
            document.getElementById(
                `pessoa${i}`
            ).innerText = ` - ${datasNascimento[i][3]} de idade`;
        }
    } catch (error) {
        alert(error.message);
    }
});

function calculaIdade(a, m, d) {
    const dataAtual = new Date();
    let idade = dataAtual.getFullYear() - parseInt(a);

    if (parseInt(m) > dataAtual.getMonth() + 1) {
        idade--;
    }

    if (
        parseInt(m) == dataAtual.getMonth() + 1 &&
        parseInt(d) > dataAtual.getDay()
    ) {
        idade--;
    }

    return idade;
}

function verificarIdades(arr) {
    if (arr.length == 0) {
        throw new Error("Nenhum valor inserido");
    }
    for (let i = 0; i < arr.length; i++) {
        let idade = calculaIdade(arr[i][0], arr[i][1], arr[i][2]);

        if (idade >= 18) {
            arr[i].push("Maior");
        } else {
            arr[i].push("Menor");
        }
    }
}
