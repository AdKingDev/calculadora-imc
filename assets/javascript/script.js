// Seleciona o botão calcular
const calcular = document.getElementById('calcular');

// Função para calcular o IMC
function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    // Validação dos campos
    if (nome !== '' && altura !== '' && peso !== '') {

        // Cálculo do IMC
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        // Classificação do IMC
        let classificacao = '';

        // Determina a classificação com base no valor do IMC
        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!';
        }   else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        }   else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II.';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        // Exibe o resultado
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        // Se algum campo estiver vazio
    } else {
        resultado.textContent = 'ERRO! Preencha todos os campos.';
    }
}

// Evento de clique no botão calcular
calcular.addEventListener('click', imc);