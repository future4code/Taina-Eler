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
Seria interessante trocar p = horasTrabalhadasDia
e t = valorTrabalhoDia
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
idade = prompt("Qual é a sua idade?")
console.log(typeof nome)
console.log(typeof idade)

/*(e-f) Agora é pedido para que o usuário
atribua valores a estas duas variáveis,
então como é utilizado o prompt, este 
retornará string string, mesmo se eu tiver
tratando de números
*/

console.log("Olá", nome, "você tem", idade, "anos.")

//********************************* 

// Exercícío 2

const roupa = "Você está usando roupa azul?"
console.log(roupa, true)

const clima = "Está muito frio hoje?"
console.log(clima, true)

const corFavorita = "Sua cor favorita é rosa?"
console.log(corFavorita, false)

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