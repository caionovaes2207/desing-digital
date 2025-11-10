// 1 Verificar se pode dirigir
function podeDirigir(idade) {
    if (idade >= 18) {
        return "Pode ser habilitado(a)";
    } else {
        return "Ainda não pode";
    }
}

function testePodeDirigir() {
    let idade = document.getElementById("idade").value;
    document.getElementById("resultado1").textContent = podeDirigir(Number(idade));
}


// 2 Maior entre três
function encontrarMaiorEntreTres(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > a && b > c) return b;
    else return c;
}

function testeMaior() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    document.getElementById("resultado2").textContent = encontrarMaiorEntreTres(a, b, c);
}


// 3 Classificador de moedas
function classificarMoeda(valor) {
    if (valor === 0.01) return "Um Centavo";
    else if (valor === 0.05) return "Cinco Centavos";
    else if (valor === 0.10) return "Dez Centavos";
    else if (valor === 0.25) return "Vinte e Cinco Centavos";
    else if (valor === 0.50) return "Cinquenta Centavos";
    else if (valor === 1.00) return "Um Real";
    else return "Valor Desconhecido";
}

function testeMoeda() {
    let valor = Number(document.getElementById("moeda").value);
    document.getElementById("resultado3").textContent = classificarMoeda(valor);
}


// 4 Senha forte
function senhaForte(senha) {
    if (senha.length > 8 && senha !== "12345678") {
        return true;
    }
    return false;
}

function testeSenha() {
    let senha = document.getElementById("senha").value;
    document.getElementById("resultado4").textContent = senhaForte(senha);
}


// 5 Checar temperatura
function checarTemperatura(temp) {
    if (temp < 10) return "Alerta de Frio";
    else if (temp >= 10 && temp <= 25) return "Temperatura Ideal";
    else return "Alerta de Calor";
}

function testeTemp() {
    let temp = Number(document.getElementById("temp").value);
    document.getElementById("resultado5").textContent = checarTemperatura(temp);
}


// 6 Nome do dia (switch)
function nomeDoDia(num) {
    switch (num) {
        case 1: return "Domingo";
        case 2: return "Segunda";
        case 3: return "Terça";
        case 4: return "Quarta";
        case 5: return "Quinta";
        case 6: return "Sexta";
        case 7: return "Sábado";
        default: return "Número inválido";
    }
}

function testeDia() {
    let dia = Number(document.getElementById("dia").value);
    document.getElementById("resultado6").textContent = nomeDoDia(dia);
}


// 7 Tipo de triângulo
function tipoTriangulo(L1, L2, L3) {
    if (L1 === L2 && L2 === L3) return "Equilátero";
    else if (L1 === L2 || L1 === L3 || L2 === L3) return "Isósceles";
    else return "Escaleno";
}

function testeTriangulo() {
    let L1 = Number(document.getElementById("l1").value);
    let L2 = Number(document.getElementById("l2").value);
    let L3 = Number(document.getElementById("l3").value);
    document.getElementById("resultado7").textContent = tipoTriangulo(L1, L2, L3);
}


// 8 Nome completo
function gerarNomeCompleto(pessoa) {
    return pessoa.primeiroNome + " " + pessoa.sobrenome;
}

function testeNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;

    document.getElementById("resultado8").textContent = gerarNomeCompleto({
        primeiroNome: nome,
        sobrenome: sobrenome
    });
}


// 9 Média simples
function calcularMediaSimples(N1, N2) {
    let media = (N1 + N2) / 2;
    return media >= 7 ? "Aprovado" : "Reprovado";
}

function testeMedia() {
    let N1 = Number(document.getElementById("n1").value);
    let N2 = Number(document.getElementById("n2").value);
    document.getElementById("resultado9").textContent = calcularMediaSimples(N1, N2);
}


// 10 Formatador de telefone
function formatarTelefone(numero) {
    return numero.slice(0, 4) + "-" + numero.slice(4);
}

function testeTelefone() {
    let numero = document.getElementById("fone").value;
    document.getElementById("resultado10").textContent = formatarTelefone(numero);
}