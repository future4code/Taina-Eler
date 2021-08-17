// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Insira a altura'))
  const largura = Number(prompt('Insira a largura'))
  const areaRetangulo = altura * largura
  console.log(areaRetangulo)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Insira o ano atual'))
  const anoDeNascimento = Number(prompt('Insira o ano de nascimento'))
  const calculoIdade = anoAtual - anoDeNascimento
  console.log(calculoIdade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const formulaIMC = peso / (altura * altura)
  return formulaIMC
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Insira seu nome')
  const idade = prompt('Insira sua idade')
  const email = prompt('Insira seu e-mail')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const array = []
  const cor1 = prompt('Insira uma cor favorita')
  const cor2 = prompt('Insira outra cor favorita')
  const cor3 = prompt('Insira outra cor favorita')
  array.push(cor1, cor2, cor3)
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosVendidosÑPreju = custo / valorIngresso
  return ingressosVendidosÑPreju
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const tamanhoIgual = string1.length === string2.length
  return tamanhoIgual

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length -1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length -1]
  array[0] = ultimoElemento
  array[array.length -1] = primeiroElemento

  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const strinsIguais = string1.toUpperCase() == string2.toUpperCase()
  return strinsIguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Insira o ano atual'))
  const anoDeNascimento = Number(prompt('Insira o ano de nascimento atual'))
  const anoEmissaoRG = Number(prompt('Insira o ano de emissão do RG atual'))

  const idadeAtual = anoAtual - anoDeNascimento
  const carteira = anoAtual - anoEmissaoRG
  
  const condicao1 = idadeAtual <= 20 && carteira >=5
  

  const condicao2 = idadeAtual > 20 || idadeAtual <= 50 && carteira >=10
  

  const condicao3 = idadeAtual > 50 && carteira >15

  console.log(condicao1, condicao2, condicao3)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt('Você tem mais de 18 anos?')
  const grauDeFormacao = prompt('Você possui ensino médio completo?')
  const disponibilidadeDeHorario = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
  const condicao = maiorIdade && grauDeFormacao && disponibilidadeDeHorario

  console.log(condicao)
}