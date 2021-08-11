//------------------------>EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<------------------------

// ************************Exercício 1************************

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2   //false
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3   //false
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2)   //true
console.log("c. ", resultado)

console.log("d. ", typeof resultado)   //boolean


// ************************Exercício 2************************

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

// Neste exercício 2 o problema é que o prompt sempre retorna string e para fazer uma soma precisamos de number


// ************************Exercício 3************************

let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


//------------------------>EXERCÍCIOS DE ESCRITA DE CÓDIGO<------------------------

// ************************Exercício 1************************

const idade = Number(prompt('Qual é a sua idade?'))
const idadeMelhorAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))

console.log('Sua idade é maior do que a do seu amigo? ',idade>idadeMelhorAmigo )

console.log('Qual a diferença de idade entre vocês? ',idade - idadeMelhorAmigo )


// ************************Exercício 2************************

const numeroPar = Number(prompt('Insira um número par'))
console.log('Resto da divisão: ', numeroPar % 2)

/* c- Sempre ao inserir um número par, o resto
    da divisão por 2 será zero, ou seja, é divisível exaltando umas das propriedades de números pares 2n.
   d- Ao inserir um número ímpar, o resultado aparece diferente de zero
   como o esperado, pois a formação destes se dá por 2n+1. Então sempre,
   o resto resultará em 1 ou outro número diferente de zero.
*/


// ************************Exercício 3************************

const idade = Number(prompt('Qual é a sua idade?'))

console.log('Idade em meses: ',(idade * 12))
console.log('Idade em dias: ',(idade * 365))
console.log('Idade em horas: ',(idade * 8760))


// ************************Exercício 4************************

const numero1 = Number(prompt('Insira um número'))
const numero2 = Number(prompt('Insira outro número'))

// OPERAÇÕES
const soma = numero1 + numero2
console.log('Resultado da soma: ', soma)

const subtracao = numero1 - numero2
console.log('Resultado da subtração: ', subtracao)

const multiplicacao = numero1 * numero2
console.log('Resultado da multiplicação: ', multiplicacao)

const divisao = numero1 / numero2
console.log('Resultado da divisão: ', divisao)

const resto = numero1 % numero2
console.log('Resultado do resto da divisão: ', resto)

// COMPARAÇÕES

console.log('O primeiro número é maior que segundo?',numero1 > numero2)

console.log('O primeiro número é igual ao segundo?',numero1 === numero2)

console.log('O primeiro número é divisível pelo segundo?',resto === 0)

console.log('O segundo número é divisível pelo primeiro?',resto === 0)
