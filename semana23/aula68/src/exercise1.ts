/*ADICIONAR UM CARACTER

    banana -> bananaa | bananao| ... a-z
*/

/*REMOVER UM CARACTER

    banana -> banan 
    cachorro -> cachorr
*/

/*SUBSTITUIR UM CARACTER

    banana -> bapana 
    cachorro -> cachotro
*/

const isOneEdit = (stringA: string, stringB: string): boolean => {
     //Se a stringB - stringA >1 passou de uma adição -> false

     if(Math.abs(stringB.length - stringA.length) >1){
        return false
    }
    
    //Se sempre existe uma maior(original), deve incluir a menor
    if(stringA.length>stringB.length){
        return stringA.includes(stringB)
    }

    if(stringB.length>stringA.length){
        return stringB.includes(stringA)
    }
   
    //Vendo de existe um caractere diferente

    /*
        Se um caractere na mesma posição for igual ao outro ele não faz nada e pula para o próximo, como você pensou.
        Se for diferente ele adiciona mais um na variável diffCaracter
    */

    let diffCaracter = 0
    for(let i=0; i < stringA.length; i++){
        if(stringA[i] !== stringB[i]) {
            diffCaracter++
        }
    }

    // Retorna true se a diferença é 1, false caso contrário
    return diffCaracter === 1

   
}

console.log(isOneEdit("banana", "bananao")) //adicionar caractere
console.log(isOneEdit("banana", "banan")) //remover caractere
console.log(isOneEdit("banana", "bapana")) //substituir caractere
