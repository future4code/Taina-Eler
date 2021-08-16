//-------------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<--------------------------------

//----------------Exercício 1----------------

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0]) //a. Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1]) //a. Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //a. {canal: "Globo", horario : "14h"}


//----------------Exercício 2----------------

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //a.{nome: "Juca", idade:3, raca: "SRD"}
console.log(gato) //a.{nome: "Juba", idade:3, raca: "SRD"}
console.log(tartaruga) //a.{nome: "Jubo", idade:3, raca: "SRD"}
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? ans: os três pontos traz as características e
//começa a próxima a partir destas.


//----------------Exercício 3----------------
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender")) //a. false
console.log(minhaFuncao(pessoa, "altura")) //a. undefined
// Explique o valor impresso no console. Você sabe por que isso aconteceu? ans: retornou o boolean do backender e 
//undefined pois não existe o parâmetro altura



//-------------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<--------------------------------

//----------------Exercício 1----------------
//a.
const pessoaex = {
    nome: "Gabriel",
    apelido: ["Biel", "Bê", "Gabo"]
}

const frase = `Eu sou ${pessoaex.nome}, mas pode me chamar de: ${pessoaex.apelido}`
console.log(frase)

//b.
const pessoaexNova = {
    ...pessoaex,
    apelido: ["Gabi", "Lele", "El"]
}

const frase2 = `Eu sou ${pessoaexNova.nome}, mas pode me chamar de: ${pessoaexNova.apelido}`
console.log(frase2)


//----------------Exercício 2----------------
//a.
const pessoa1 = {
    nome: "Maria",
    idade: 26,
    profissao: "Engenheira"
}

//b.
function dadosPessoa1(pessoa1) {
    	return [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
}
    
console.log(dadosPessoa1(pessoa1))

//a.
const pessoa2 = {
    nome: "João",
    idade: 30,
    profissao: "Médico"
}

//b.
function dadosPessoa2(pessoa2) {
    return [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]
}

console.log(dadosPessoa2(pessoa2))


//----------------Exercício 3----------------
//a.
const carrinho = []

//b.
const fruta1 = {
    nome: "Maça",
 disponibilidade: true
}
const fruta2 = {
    nome:"Ameixa",
    disponibilidade: true
}
const fruta3 = {
    nome:"Melão",
    disponibilidade: true
}

//c.

function enchendoCarrinho(fruta) {
	return carrinho.push(fruta)
}

enchendoCarrinho(fruta1)
enchendoCarrinho(fruta2)
enchendoCarrinho(fruta3)

//d.

console.log(carrinho)

