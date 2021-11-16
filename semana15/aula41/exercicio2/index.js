
const colors = require("colors")


const  res = process.argv[2]
let  num1 = Number( process.argv[3])
let  num2 = Number( process.argv[4])



const soma = (num1, num2) => {
    return num1+num2
}

const resultado  = soma(num1, num2)
console.log(`A soma resulta em: ${resultado}`.red)




