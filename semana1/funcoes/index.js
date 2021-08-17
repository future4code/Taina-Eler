//----------------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<-----------------------------------

//----------------Exercício1----------------

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2)) //a. retorna o valor 10 = 2*5
console.log(minhaFuncao(10)) //a. retorna o valor 50 = 10*5

 //Retirando o console.log
minhaFuncao(2) //b. neste caso este valor 10 é guardado somente no return e não é impresso na página
minhaFuncao(10)//b. neste caso este valor 50 é guardado somente no return e não é impresso na página


//----------------Exercício2----------------

let textoDoUsuario = prompt("Insira um texto"); //a. este código pede ao usuário um texto e a função transforma este texto
// em minúsculo e verifica se a palavra cenoura está neste texto
const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") 
}

const resposta = outraFuncao(textoDoUsuario)// b. Para cada saída retornaria true
console.log(resposta)



//----------------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<-----------------------------------

//----------------Exercício1----------------

//a.
function minhasInformacoes(){
    console.log('Eu sou Tainá, tenho 24 anos, moro em Bom Jardim e sou estudante.')
}

minhasInformacoes()

//b.
function minhasInformacoes2(nome, idade, cidade, profissão ){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`)
}

minhasInformacoes2('Tainá', 24, 'Bom Jardim', 'estudante')


//----------------Exercício2----------------

//a.
function somaDeDoisNumeros(numero1, numero2){
    const soma = numero1 + numero2
    return soma
}

console.log(somaDeDoisNumeros(2, 3))

//b.
function comparacaoDeDoisNumeros(numero1, numero2){
    const compara = numero1 >= numero2
    return compara
}

console.log(comparacaoDeDoisNumeros(3, 3))

//c.
function ehNumeroPar(numero){
    const condicaoPar = numero % 2 === 0
    return condicaoPar
}

console.log(ehNumeroPar(5))

//d. 
function tamanhoDaMensagem(mensagem){
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}
console.log(tamanhoDaMensagem('Estudo na Labenu!'))


//----------------Exercício3----------------

function somaDeNumeros(num1, num2){
    const somando = num1 + num2
    console.log(`Soma: ${somando}`)
    return somando
}

function subtracaoDeNumeros(num1, num2){
    const subtraindo = num1 - num2
    console.log(`Subtração: ${subtraindo}`)
    return subtraindo
}

function multiplicacaoDeNumeros(num1, num2){
    const multiplicando = num1 * num2
    console.log(`Multiplicação: ${multiplicando}`)
    return multiplicando
}

function divisaoDeNumeros(num1, num2){
    const dividindo = num1 / num2
    console.log(`Divisão: ${dividindo}`)
    return dividindo
}

const primeiroNumeroPrompt = Number(prompt('Insira um número'))
const segundoNumeroPrompt = Number(prompt('Insira um número'))


console.log(`Números inseridos: ${primeiroNumeroPrompt} e ${segundoNumeroPrompt}`)

somaDeNumeros(primeiroNumeroPrompt, segundoNumeroPrompt)
subtracaoDeNumeros(primeiroNumeroPrompt, segundoNumeroPrompt)
multiplicacaoDeNumeros(primeiroNumeroPrompt, segundoNumeroPrompt)
divisaoDeNumeros(primeiroNumeroPrompt, segundoNumeroPrompt)