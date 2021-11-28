// Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for "abcd", a saída deve ser "dcba" .

function reverseString(str: string) {
    if (typeof str !== "string") {
      return "Invalid string"
    }
  
    let reversedStr = ""
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i]
    }
  
    return reversedStr
  }
  
  console.log(reverseString("abcd"))