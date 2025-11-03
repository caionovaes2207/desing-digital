function verificarNumero() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    if (numero === "") {
        resultado.textContent = "Por favor, insira um número.";
    } else if (numero % 2 === 0) {
        resultado.textContent = `O número ${numero} é PAR.`;
    } else {
        resultado.textContent = `O número ${numero} é ÍMPAR.`;
    }
}