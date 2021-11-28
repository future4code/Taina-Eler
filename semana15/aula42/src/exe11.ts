// Escreva uma função que determine o fatorial para um número  n >= 1 .

function calcFactorial(n: number): number | string {
    if (typeof n !== "number") {
      return "Invalid number"
    }
  
    if (!Number.isInteger(n)) {
      return "Number must be an integer"
    }
  
    if (n === 0) {
      return "Number must be greater than 0"
    }
  
    let result = 1;
  
    for (let i = n; i > 0; i--) {
      result *= i
    }
  
    return result
  }
  
  console.log(calcFactorial(3))
  
  
  // b) Reescreva a função acima para determinar o fatorial de um número n >= 0.
  
  export function calcFactorialB(n: number): number | string {
    if (typeof n !== "number") {
      return "Invalid number"
    }
  
    if (!Number.isInteger(n)) {
      return "Number must be an integer"
    }
  
    if (n === 0) {
      return 1
    }
  
    let result = 1;
  
    for (let i = n; i > 0; i--) {
      result *= i
    }