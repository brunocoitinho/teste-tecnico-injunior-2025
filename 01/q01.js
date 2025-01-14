const formQuadratica = document.getElementById("form-quadratica");
const inputCoeficienteA = document.getElementById("coeficiente-a");
const inputCoeficienteB = document.getElementById("coeficiente-b");
const inputCoeficienteC = document.getElementById("coeficiente-c");
const txtResultado = document.getElementById("resultado");

formQuadratica.addEventListener("submit", function (e) {
    e.preventDefault();
    let ca = parseFloat(inputCoeficienteA.value);
    let cb = parseFloat(inputCoeficienteB.value);
    let cc = parseFloat(inputCoeficienteC.value);
    let d = determinante(ca, cb, cc);
    let resposta = `Determinante: ${d} || Raízes: ${baskhara(d, ca, cb)}`;
    txtResultado.innerText = resposta;
});

function determinante(a, b, c) {
    return b ** 2 - 4 * a * c;
}

function baskhara(det, a, b) {
    let totalraizes = 0;
    let res = "(";
    if (det < 0) {
        return "A equação não possui raízes reais.";
    }
    let x1 = (b * -1 + Math.sqrt(det)) / (2 * a);
    totalraizes++;
    res += `X1: ${x1} `;
    console.log();
    if (det > 0) {
        let x2 = (b * -1 - Math.sqrt(det)) / (2 * a);
        totalraizes++;
        res += `X2: ${x2}`;
    }
    return res + `) || O total de raízes reais é ${totalraizes}.`;
}
