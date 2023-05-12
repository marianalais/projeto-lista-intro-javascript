// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo:"));
  const largura = Number(prompt("Digite a largura do retângulo:"));
  const area = altura * largura;

  console.log(area);
  3;
}
calculaAreaRetangulo();

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));
  const anoDeNascimento = Number(prompt("Digite seu ano de nascimento:"));
  let idade = anoAtual - anoDeNascimento;
  3;
  console.log(idade);
}
imprimeIdade();

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let IMC = peso / (altura * altura);

  return IMC;
}
calculaIMC(60, 1.6);

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Qual o seu nome?");
  let idade = Number(prompt("Qual a sua idade?"));
  let email = prompt("Qual o seu email?");

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}
imprimeInformacoesUsuario();

// EXERCÍCIO 05oi
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor:");
  const cor2 = prompt("Digite uma segunda cor:");
  const cor3 = prompt("Digite uma terceira cor:");

  console.log([cor1, cor2, cor3]);
}
imprimeTresCoresFavoritas();

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;
}
retornaStringEmMaiuscula("mariana");

// EXERCÍCIO 074
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  const quantidadeIngressos = custo / valorIngresso;

  return quantidadeIngressos;
}
calculaIngressosEspetaculo(3000, 100);

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}
checaStringsMesmoTamanho("ola", "abc");

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const lowerCaseString1 = string1.toLowerCase();
  const lowerCaseString2 = string2.toLowerCase();

  return lowerCaseString1 === lowerCaseString2;
}
checaIgualdadeDesconsiderandoCase("ola", "OLA");

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Digite o ano atual:"));
  const anoDeNascimento = Number(prompt("Dugite o ano de nascimento:"));
  const anoEmissaoCarteira = Number(
    prompt("Digite o ano em que sua carteira de identidade foi emitida:")
  );
  const idade = anoAtual - anoDeNascimento;
  const tempoDesdeEmissao = anoAtual - anoEmissaoCarteira;

  const condicao1 = idade <= 20 && tempoDesdeEmissao >= 5; //renovada de 5 em 5 anos
  const condicao2 = idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10; //renovada de 10 em 10 anos
  const condicao3 = idade > 50 && tempoDesdeEmissao >= 15; //renovada de 15 em 15 anos

  console.log(condicao1 || condicao2 || condicao3);
}
checaRenovacaoRG();

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
