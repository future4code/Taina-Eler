/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//Montando o Jogo//
//1
console.log("Boas vindas ao jogo de Blackjack!")

//2

if(confirm("Quer iniciar uma nova rodada?")){
   // Cartas do Usuário
   const cartasDoUsuario = []
   const cartaUser1 = comprarCarta()
   const cartaUser2 = comprarCarta()
   cartasDoUsuario.push(cartaUser1, cartaUser2)
   
   console.log(cartasDoUsuario)
   //console.log(cartaUser1, cartaUser2)

   // Cartas do Computador
   const cartasDoComputador = []
   const cartaPC1 = comprarCarta()
   const cartaPC2 = comprarCarta()
   cartasDoComputador.push(cartaPC1, cartaPC2)
  
   console.log(cartasDoComputador)

   //--------Valor total usuário---------//
      function calculoValorTotaUser (){const arrayValoresUser = cartasDoUsuario.map((item, index, array) => {return item.valor})
       console.log(arrayValoresUser)

       const somaCartasUser = arrayValoresUser[0] + arrayValoresUser[1]
      //console.log(somaCartasUser)
      return somaCartasUser
      }
      const valorTotalUser = calculoValorTotaUser ()
   

   //--------Valor total Computador---------//
      function calculoValorTotaLPC(){const arrayValoresPC = cartasDoComputador.map((item, index, array) => {return item.valor})
       console.log(arrayValoresPC)
    
       const somaCartasPC = arrayValoresPC[0] + arrayValoresPC[1]
      //console.log(somaCartasPC)
       return somaCartasPC
      }
      const valorTotalPC = calculoValorTotaLPC()

   //---------Textos das cartas do Usuário----------//
      function mostraTextoDaCartaUser(){const arrayTextoUser = cartasDoUsuario.map((item, index, array) => {return item.texto})
      console.log(arrayTextoUser)
      return arrayTextoUser
      }
      const textoUsuario = mostraTextoDaCartaUser()
   
   //Acessando texto das cartas do Usuário
   const textoUser1 = textoUsuario[0]
   const textoUser2 = textoUsuario[1]
   
     
   //---------Textos das cartas do Computador----------//
       function mostraTextoDaCartaPC(){const arrayTextoPC = cartasDoComputador.map((item, index, array) => {return item.texto})
      console.log(arrayTextoPC)
      return arrayTextoPC
      }
      const textoComputador = mostraTextoDaCartaPC()

   //Acessando texto das cartas do Computador
   const textoComputador1 = textoComputador[0]
   const textoComputador2 = textoComputador[1]
   

  //Retornando frase com as cartas e pontuação de cada jogador

   const fraseUsuario = `Usuário - cartas: ${textoUser1} ${textoUser2}  - pontuação ${valorTotalUser}`
   const fraseComputador = `Computador - cartas: ${textoComputador1} ${textoComputador2}  - pontuação ${valorTotalPC}`

   console.log(fraseUsuario)
   console.log(fraseComputador)

   //Indicando se houve vencedor ou um empate
   function declarandoGanhador(){if(valorTotalUser > valorTotalPC){
      console.log("O Usuário Ganhou!") 
   }else if(valorTotalUser < valorTotalPC){
      console.log("O Computador Ganhou!") 
   }else{
      console.log("Empate!") 
   }
}
   
declarandoGanhador()


}else{
   console.log("O jogo acabou!")
}

