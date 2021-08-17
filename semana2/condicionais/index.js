//------------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<-------------------------------

//---------------Exercício1---------------//

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numer = Number(respostaDoUsuario)

if (numer % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//a. Verificação de números pares, se a divisão do número por 2 tiver resto 0, então é par e passa no teste.
//b. Números pares
//c. Números ímpares

//---------------Exercício2---------------//

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//a. O código mostra frutas e seus respectivos preços, de acordo com a fruta escolhida e preco = 5 para nenhuma das frutas
//b. O preço da fruta fruta maçã é R$ 3.5.
//c. Mostraria a mensagem com a fruta pêra e o preço do abaixo do default

//---------------Exercício3---------------//

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

// console.log(mensagem)
//a. Pedindo ao usúario um número
//b. Esse número passou no teste. Dará um erro.
//c. Sim. Só é possível acessar a variável dentro do escopo local e não pelo global


//------------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<-------------------------------

//---------------Exercício1---------------//

const idadeDoUsuario = Number(prompt("Insira sua idade"))

function podeDirigir(idade){
    if(idade >=18){
        console.log("Você pode dirigir")
    }else{
        console.log("Você não pode dirigir")
    }
}

podeDirigir(idadeDoUsuario)


//---------------Exercício2---------------//

const horarioDeEstudo = prompt("Em qual turno do dia voê estuda? Digite M(matutino), V(Vespertino) ou N(Noturno)").toLocaleLowerCase()

function turnoDeEstudo(turno){
    if(turno === "m"){
        console.log("Bom dia!")
    }else if(turno === "v"){
        console.log("Boa tarde!")
    }else if(turno === "n"){
        console.log("Boa noite!")
    }else{
        console.log("Digite a letra correspondente ao turno")
    }
}

turnoDeEstudo(horarioDeEstudo)

//---------------Exercício3---------------//

const horarioDeEstudoSwitch = prompt("Em qual turno do dia voê estuda? Digite M(matutino), V(Vespertino) ou N(Noturno)").toLocaleLowerCase()

switch(horarioDeEstudoSwitch) {
    case "m" :
        console.log("Bom dia!")
        break
    case "v" :
        console.log("Boa tarde!")
        break
    case "n" :
        console.log("Boa noite!")
        break
    default :
    console.log("Digite a letra correspondente ao turno")
}


//---------------Exercício4---------------//

const generoDoFilme = prompt("Qual o gênero do filme? Fantasia, Terror, Romance ...").toLocaleLowerCase()
const precoIngresso = Number(prompt("Qual o valor do ingresso?"))

if(generoDoFilme === "fantasia" && precoIngresso < 15){
    console.log("Bom filme!")

}else{
    console.log("Escolha outro filme :(")
}



//------------------------------->DESAFIO DE ESCRITA DE CÓDIGO<-------------------------------

//---------------Exercício1---------------//

const generoDoFilmeDesafio = prompt("Qual o gênero do filme? Fantasia, Terror, Romance ...").toLocaleLowerCase()
const precoIngressoDesafio = Number(prompt("Qual o valor do ingresso?"))

if(generoDoFilmeDesafio === "fantasia" && precoIngressoDesafio < 15){
    const lanche = prompt("Qual lanche você vai querer?")
    console.log("Bom filme!")
    console.log("Aproveite o seu ",lanche)

}else{
    console.log("Escolha outro filme :(")
}


