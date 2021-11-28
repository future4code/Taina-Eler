
const primeiroNum = Number(process.argv[2])
const segundoNum = Number(process.argv[3])
const operacaoNum = (num1: number, num2: number): void => {

    if (isNaN(num1)) { // NaN é Not a Number, isNaN checa se o valor é NaN
       console.log("Insira um número no primeiro argumento")
    }

    if (isNaN(num2)) { // NaN é Not a Number, isNaN checa se o valor é NaN
        console.log("Insira um número no segundo argumento")
     }
 

    console.log(`Números:${num1} e ${num2}`)

    const soma = num1 + num2
    console.log(`Soma:${soma}`)

    const sub = num1 - num2
    console.log(`Subtração:${sub}`)

    const mult = num1 * num2
    console.log(`Multiplicação:${mult}`)

    if (num1 > num2) {
        console.log("Maior: ", num1)
    } else if (num1 < num2) {
        console.log("Maior: ", num2)
    } else {
        console.log(`São iguais: ${num1} = ${num2}`)
    }
}

operacaoNum(primeiroNum,segundoNum)