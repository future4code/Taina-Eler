import { calcFactorialB } from './exe11'

// a) Escreva uma função que receba uma palavra e devolva a quantidade de anagramas que ela possui.

function calcAnagramCount(str: string) {
  return calcFactorialB(str.length)
}

console.log(calcAnagramCount("mesa"))


// b) Escreva uma função que receba uma palavra com estas características e determine quantos anagramas ela possui.

function calcRepeatedLetters(str: string): number | string {
  if (typeof str !== "string") {
    return "Invalid string"
  }

  type Obj = {
    [key: string]: number
  }

  let obj: Obj = {}
  let repeatedLetters = 1
  
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj = { ...obj, [str[i]]: obj[str[i]] + 1 }
      repeatedLetters += 1
    } else {
      obj = {...obj, [str[i]]: 1}
    }
  }

  return repeatedLetters
}

function calcAnagramCountB(str: string): number | string {
  const totalLettersFactorial = calcFactorialB(str.length)
  const repeatedLetters = calcRepeatedLetters(str)

  if (typeof repeatedLetters !== "number") {
    return repeatedLetters
  }

  const repeatedLettersFactorial = calcFactorialB(repeatedLetters)

  if (typeof totalLettersFactorial !== "number") {
    return totalLettersFactorial
  }

  if (typeof repeatedLettersFactorial !== "number") {
    return repeatedLettersFactorial
  }

  return totalLettersFactorial/repeatedLettersFactorial
}

console.log(calcAnagramCountB("anagrama"))
