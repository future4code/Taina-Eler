/*--------------------------------------RECURSIVIDADE------------------------------------
----------------------------------------------------------------------------------------------*/
//Exercício 1   
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
/*
    --------------------------------------(n-1) seguido de n------------------------------------
    n0 = 0 começo /fim              => 0
    n1 = n0 seguido de 1            => 0, 1
    n2 = n1 seguido de 2            => 0, 1, 2
    n3 = n2 seguido de 3            => 0, 1, 2, 3
    n4 = n3 seguido de 4            => 0, 1, 2, 3, 4

// */
// function ascNumbers(n: number): void {
//     if (n >= 0) {
//         ascNumbers(n - 1);
//       console.log(n);
//     }
// }
// ascNumbers(2)
// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
/*
    --------------------------------------n seguido de (n-1)------------------------------------
    n0 = 0 começo /fim              => 0
    n1 = 1 seguido de n0            => 1, 0
    n2 = 2 seguido de n1            => 2, 1, 0
    n3 = 3 seguido de n2            => 3, 2, 1, 0
    n4 = 4 seguido de n3            => 4, 3, 2, 1, 0

*/
// function descNumbers(n: number): void {
//     if (n >= 0) {
//         console.log(n);
//         descNumbers(n - 1);
//     }
// }
// descNumbers(3)
// //Exercício 2
// //Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
// const calculateSumToRecur = (n: number, soma: number = 0): number => {
//     if (n === 0) {
//       return soma;
//     }
//     return calculateSumToRecur(n - 1, soma + n);
// };
// //esse soma funciona como um let ou poderia ter feito calculateSumToRecur(3,0) daí não precisaria passar dentro do parâmeto em cima
//   // Exemplos de uso:
//   console.log(calculateSumToRecur(3));//6
//   console.log(calculateSumToRecur(10));//55
//   console.log(calculateSumToRecur(100));//5050
//Exercício 3  
//Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
// const calculateSumToInt = (n: number): number => {
//     let soma = 0
//       for (let i = 0 ; i <= n ; i++) {
//           soma += i;
//     }
//       return soma;
// };
//   // Exemplos de uso:
//   console.log(calculateSumToInt(3));
//   console.log(calculateSumToInt(10));
//   console.log(calculateSumToInt(100));
//Exercício 4 
//Escreva uma função recursiva que consiga imprimir todos os elementos de um array. 
var printArray = function (arr, i) {
    if (i === void 0) { i = arr.length - 1; }
    if (i >= 0) {
        console.log("Elemento " + i + ": ", arr[i]);
        printArray(arr, i - 1);
    }
};
// Exemplo de uso:
var array = [1, 2, 3, 4];
printArray(array);
