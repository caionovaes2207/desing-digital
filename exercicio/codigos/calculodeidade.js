function calcularIdade() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const anoAtual = new Date().getFullYear();
    const resultado = document.getElementById('resultado');

    if (anoNascimento === "" || anoNascimento > anoAtual || anoNascimento < 1900) {
        resultado.textContent = "Por favor, insira um ano válido.";
    } else {
        const idade = anoAtual - anoNascimento;
        resultado.textContent = `Você tem ${idade} anos de idade.`;
    }
}