

//a) A entrada é um array de números e a saída é um objeto
// com as estatísticas de maior, menor e média

type Estatistica = {
    maior: number,
    menor: number,
    media: number
}

type Amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatistica
}


function obterEstatisticas(numeros: number[]) : Estatistica {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades: Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))