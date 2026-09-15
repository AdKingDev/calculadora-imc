# ⚖️ Calculadora de IMC

Aplicação web para calcular o **Índice de Massa Corporal (IMC)** a partir do peso e da altura informados pelo usuário.

Além de realizar o cálculo, a aplicação apresenta uma classificação correspondente ao resultado e personaliza a mensagem utilizando o nome informado.

## 🔗 Demonstração

[Acessar Calculadora de IMC](https://calculadora-imc-lovat-zeta.vercel.app/)

## 💡 Sobre o projeto

A **Calculadora de IMC** foi desenvolvida como projeto de estudo para colocar em prática conceitos fundamentais de JavaScript em uma aplicação interativa.

O usuário informa:

* Nome;
* Peso em quilogramas;
* Altura em metros.

Após clicar em **Calcular**, os dados são processados e o resultado é exibido diretamente na interface.

## 🧮 Como funciona

O cálculo utilizado pela aplicação é:

```text
IMC = peso / altura²
```

O resultado é formatado com uma casa decimal e classificado através de estruturas condicionais.

A aplicação trabalha com as seguintes faixas:

* Abaixo de `18.5` — abaixo do peso;
* De `18.5` até `24.9` — peso ideal;
* De `25` até `29.9` — levemente acima do peso;
* De `30` até `34.9` — obesidade grau I;
* De `35` até `39.9` — obesidade grau II;
* A partir de `40` — obesidade grau III.

Caso algum dos campos esteja vazio, o cálculo não é realizado e uma mensagem de erro é apresentada ao usuário.

## ⚙️ Lógica da aplicação

O JavaScript é responsável por:

1. Capturar os valores inseridos nos campos;
2. Verificar se todos os dados foram preenchidos;
3. Calcular o IMC;
4. Determinar sua classificação utilizando `if` e `else if`;
5. Montar uma mensagem personalizada;
6. Atualizar o conteúdo da página através do DOM.

A execução é iniciada por um evento de `click` associado ao botão **Calcular**.

## 📱 Responsividade

A interface possui estilos específicos para diferentes tamanhos de tela.

Além da adaptação das dimensões do formulário, inputs, botão e área de resultado, o projeto utiliza diferentes imagens de fundo de acordo com a resolução disponível.

## 🛠️ Tecnologias

* **HTML5** — estrutura da aplicação;
* **CSS3** — estilização e responsividade;
* **JavaScript** — cálculo, validações e interação com a interface;
* **Vercel** — publicação da aplicação.

## 🧠 Conceitos praticados

Durante o desenvolvimento deste projeto, foram aplicados conceitos como:

* Variáveis com `const` e `let`;
* Funções;
* Operadores aritméticos;
* Estruturas condicionais;
* Comparações;
* Manipulação do DOM;
* `getElementById()`;
* `addEventListener()`;
* Template literals;
* `.toFixed()`;
* Validação de campos;
* Flexbox;
* Variáveis CSS;
* Pseudo-classes;
* Media queries;
* Responsividade.

## ⚠️ Observação

Esta aplicação possui finalidade educacional. O resultado apresentado é apenas uma referência baseada no cálculo de IMC e não substitui uma avaliação profissional.

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por **Adriano Júnio**.
