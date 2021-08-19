//------------------------->EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO<-------------------------

//-------------Exercício 1-------------//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // está fazendo uma cópia do array usuarios e vai ser impresso os objetos

//-------------Exercício 2-------------//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
  //Será impresso o array somente com os nomes

//-------------Exercício 3-------------//

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
 // Vai filtrar os objetos que não apresentam o nome Chijo e repassá-los para o console


 //------------------------->EXERCÍCIOS DE ESCRITA DE CÓDIGO<-------------------------

//-------------Exercício 1-------------//

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a.
const nomesDosPets = pets.map((objeto) => {return objeto.nome})

console.log(nomesDosPets)

//b.

const petsSalsicha = pets.filter((objeto) => {return objeto.raca === "Salsicha"})

console.log(petsSalsicha)

//c.
const petsPoodle = pets.filter((objeto) => {return objeto.raca === "Poodle"})

const mensagemDeDesconto = petsPoodle.map((objeto) => {return `Você ganhou um cupom de desconto de 10% para tosar o/a ${objeto.nome}`})

console.log(mensagemDeDesconto)



//-------------Exercício 2-------------//

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a.
const nomesDosProdutos = produtos.map((objeto) => {return objeto.nome})

console.log(nomesDosProdutos)

//b.

// function descontoDe5(produtos){
//     const desconto = produtos.preco - (produtos.preco * 0.05)
//     return desconto
// }

// const itensComDesconto = produtos.map((item) =>{item.nome, descontoDe5(item)} )

// console.log(itensComDesconto)

//c.

const categoriaDosProdutos = produtos.filter((elemento, index, array) => {return elemento.categoria === "Bebidas"})

console.log(categoriaDosProdutos)

//d.

// const ype = produtos.filter((objeto) => {return objeto.nome === "Ypê"})

// console.log(ype)