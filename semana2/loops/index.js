//--------------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<---------------------------------

//--------------Exercício 1--------------//

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor) 
//Está somando valores de até o contador ser 4, o valor resultará em 10.


//--------------Exercício 2--------------//

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// a. Vai ser impresso todos os valores maiores que 18.


//--------------Exercício 3--------------//

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
// *, **, ***, ****


//--------------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<---------------------------------

//--------------Exercício 1--------------//

const bichinhosDeEstimacao = Number(prompt("Quantos bichos de estimação você tem?"))

if(bichinhosDeEstimacao === 0){
    console.log("Que pena! Você pode adotar um pet!")

}

let arrayNomes = []

for (let i=1; i<=bichinhosDeEstimacao; i++){
    const nomes = prompt("Insira o nome do pet " +i)
    arrayNomes.push(nomes)

}
console.log(arrayNomes)


//--------------Exercício 2--------------//

const arrayOriginal = [2, 7, 20, 37, 48, 98, 106, 87, 5, 90, 74, 203, 65, 41, 83, 1]

//a.
function numerosDoArray (numeros){
    for(let i=0; i < arrayOriginal.length; i++){

      numeros = arrayOriginal[i]
      console.log(numeros)
    }
}

numerosDoArray(arrayOriginal)

//b.
function numerosDoArrayDivididos (numeros){
    for(let i=0; i < arrayOriginal.length; i++){

      numeros = arrayOriginal[i] / 10
      console.log(numeros)
    }
}

numerosDoArrayDivididos(arrayOriginal)

//c.

let arrayNumerosPar = []

for(let i=0; i < arrayOriginal.length; i++){
    if(arrayOriginal[i] % 2===0){
        arrayNumerosPar.push(arrayOriginal[i])
    }
    
}
console.log(arrayNumerosPar)

//d.

// function numerosDoArray (numeros){
//     for(let i=0; i < arrayOriginal.length; i++){

//       numeros = arrayOriginal[i]
//       console.log(numeros)
//     }
    
// }
// numerosDoArray(arrayOriginal)

//e.

// function maiorNumero(numeroMaior){
//     let valorMaximo = 0
//     for(let i = 0; i < numeroMaior.length; i++){
//         if(numeroMaior[i]> valorMaximo){
//             valorMaximo = numeroMaior[i]
//         }
//     }
    
//     return valorMaximo
// }
// maiorNumero(arrayOriginal)