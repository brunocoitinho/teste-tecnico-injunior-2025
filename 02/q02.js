const formFat = document.getElementById("form-fatorial");
const inputFat = document.getElementById("entrada-fat");

formFat.addEventListener("submit", function (e) {
    e.preventDefault();
    let num = parseInt(inputFat.value);
    
    try{
        alert(`O fatorial usando o algoritmo iterativo deu ${fatIterativo(num)}`);
        alert(`O fatorial usando o algoritmo recursivo deu ${fatRecursivo(num)}`);
        let resposta = prompt(
            "Deseja calcular outro fatorial? Digite S para Sim e N para não"
        );
        if (resposta.trim() == "S" || resposta.trim() == "s") {
            location.reload();
        }
    
        if (resposta.trim() == "N" || resposta.trim() == "n") {
            alert('Saindo da página!')
            window.close();
        }
    }catch(error){
        alert(error.message)
        location.reload()
    } 
});

function fatIterativo(a) {
    if (a <= 0 || a % 1 != 0){
        throw new Error('Só são aceitos valores inteiros e positivos')
    }
    let result = 1;
    for (let i = a; i > 0; i--) {
        result *= i;
    }
    return result;
}

function fatRecursivo(a) {
    if (a <= 0 || a % 1 != 0){
        throw new Error('Só são aceitos valores inteiros e positivos')
    }
    if (a == 1) {
        return 1;
    }
    return a * fatRecursivo(a - 1);
}
