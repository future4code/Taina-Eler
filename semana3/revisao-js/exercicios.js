// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoDoArray = array.length
   return tamanhoDoArray
}

retornaTamanhoArray(array)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const inverteArray = array.reverse()
  return inverteArray
}

retornaArrayInvertido(array)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const ordemCrescente = array.sort((a, b) => a - b)
  return ordemCrescente
  
}

retornaArrayOrdenado(array)

// EXERCÍCIO 04
// function retornaNumerosPares(array) {
//     let arrayDeNumerosPar = []
//   for(let i=0; i<array.length; i++){
//       if(array[i] % 2 === 0){
//           arrayDeNumerosPar.push(array[i])
//       }
      
//   }
//   return arrayDeNumerosPar
// }

// retornaNumerosPares(array)

//Utilizando o método filter
function retornaNumerosPares(array){
    const numerosPares = array.filter((numeros, indice, array) =>
    {return numeros %2 ===0})
    return numerosPares
}

retornaNumerosPares(array)

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter((numeros, indice, array) =>
    {return numeros %2 ===0})
    for (let i=0; i <numerosPares.length; i++ ){
        numerosPares[i] = numerosPares[i] * numerosPares[i]
    }
    return numerosPares
}
retornaNumerosParesElevadosADois(array)


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -Infinity
  for(let i=0; i< array.length; i++){
      if(array[i] > maior){
          maior = array[i] 
      }  
  } 
  return maior
}
retornaMaiorNumero(array)

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numero1Maior = num1 > num2
    if(numero1Maior){
        maiorNumeroEh = num1
        menorNumeroEh = num2
    }else{
        maiorNumeroEh = num2
        menorNumeroEh = num1
    }

    const ehDivisivel = maiorNumeroEh % menorNumeroEh === 0
    const diferencaPositiva = (maiorNumeroEh - menorNumeroEh)

    const objeto = {
        maiorNumero: maiorNumeroEh,
        maiorDivisivelPorMenor: ehDivisivel,
        diferenca: diferencaPositiva
    }
   return objeto
}

retornaObjetoEntreDoisNumeros(num1, num2)

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}