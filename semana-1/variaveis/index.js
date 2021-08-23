// -----Exercícios de interpretação de código-----

// Exercícío 1
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

/* 
No console será impresso 10 e,
posteriormente 10 e 5, respectivamente.
*/


//********************************* 

// Exercício 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)

/*
No console será impresso respectivamente:
10, 10, 10
*/

//********************************* 

// Exercício 3

let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)

/*
O programa calcula quando uma pessoa recebe
por hora, dividindo o valor recebido do dia
por horas trabalhadas naquele dia.
Seria interessante trocar p = horasTrabalhadasPorDia
e t = valorTrabalhoPorDia
*/
//********************************* 

// -----Exercícios de escrita de código-----

// Exercícío 1

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)

/* (a-d)Obteve como resposta undefined, pois 
não há valores previamente declarados
para estas variaveis
*/

nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Qual é a sua idade?"))
console.log(typeof (nome))
console.log(typeof (idade))

/*(e-f) Agora é pedido para que o usuário
atribua valores a estas duas variáveis,
então como é utilizado o prompt, este 
retornará string string, mesmo se eu tiver
tratando de números. Por isso é colocado o
Number na variável idade.
*/

console.log("Olá", nome, "você tem", idade, "anos.")

//********************************* 

// Exercícío 2

let roupa = prompt("Você está de roupa azul?Sim ou Não?")
let comida = prompt("Você gosta de pizza?Sim ou Não?")
let cor = prompt("Você gosta de rosa?Sim ou Não?")

//a.
const roupaAzul = roupa
const gostaDePizza = comida
const gostaDeRosa = cor
//b.
const fraseRoupaAzul = `Você está de roupa azul? - ${roupaAzul}`
const fraseGostaDePizza = `Você gosta de pizza? - ${gostaDePizza}`
const fraseGostaDeRosa = `Você gosta de rosa? - ${gostaDeRosa}`

console.log(fraseRoupaAzul)
console.log(fraseGostaDePizza)
console.log(fraseGostaDeRosa)

//********************************* 


// Exercícío 3

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

// Desafio

const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira um número"))

const soma = numero1 + numero2
const multiplicar = numero1 * numero2

const fraseSoma = `O primeiro número somado ao segundo número resulta em: ${soma}`
const fraseMultiplicacao = `O primeiro número multiplicado pelo segundo número resulta em: ${multiplicar}`

console.log(fraseSoma)
console.log(fraseMultiplicacao)
