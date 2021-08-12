//---------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<----------------------------

//-------------------Exercício 1-------------------

// let array
// console.log('a. ', array) // undefined

// array = null
// console.log('b. ', array) // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // 11

// let i = 0
// console.log('d. ', array[i]) //3

// array[i+1] = 19
// console.log('e. ', array) // 4<=>19

// const valor = array[i+6]
// console.log('f. ', valor) //9-->3+6


//-------------------Exercício 2-------------------

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) // SUBI NUM ÔNIBUS EM MIRROCOS 27



//---------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<----------------------------

//-------------------Exercício 1-------------------

// const nomeUsuario = prompt('Qual é o seu nome?')

// const emailUsuario = prompt('Insira seu email')

// console.log(`O e-mail ${emailUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`)


//-------------------Exercício 2-------------------

const comidasFavoritas = ['hamburguer', 'pizza', 'macarrão', 'bolo', 'salada']

console.log(comidasFavoritas)

console.log('b. Minhas comidas favoritas são : ')
console.log (comidasFavoritas[0])
console.log (comidasFavoritas[1])
console.log (comidasFavoritas[2])
console.log (comidasFavoritas[3])
console.log (comidasFavoritas[4])
// Trocando a segunda comida por uma inserida pelo usuário
let i=0
const comidaUsuario = prompt('Qual sua comida favorita?')
comidasFavoritas[i+1] = comidaUsuario

console.log('c. Nova lista de comidas favoritas: ', comidasFavoritas)


//-------------------Exercício 3-------------------

const listaDeTarefas = []

const tarefa1 = prompt('Insira uma tarefa necessária para o dia: ')
const tarefa2 = prompt('Insira mais uma tarefa necessária para o dia: ')
const tarefa3 = prompt('Insira mais uma tarefa necessária para o dia: ')

//Adicionando as tarefas ao array listaDeTarefas
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

 console.log(listaDeTarefas)

const indiceUsuario = Number(prompt('Insira algum número entre 0 e 2'))

//Eliminando algum elemento segundo o índice escolhido pelo usuário
listaDeTarefas.splice(indiceUsuario, 1)
 
console.log('e. ', listaDeTarefas)
