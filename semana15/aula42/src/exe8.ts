// Os pratos deste restaurante possuem  um nome, um custo, um valor de venda, e um array de ingredientes. Cada uma das vendas deve conter o nome do prato e o nome do cliente que realizou a compra.

type Prato = {
    nome: string,
    custo: number,
    venda: number,
    ingredientes: string[]
  }
  
  type Venda = {
    nome: string,
    cliente: string
  }
  
  // a) Escreva uma função que permita cadastrar um produto. Salve os produtos em um array no escopo global.
  
  const pratos: Prato[] = []
  
  function cadastraProduto(produto: Prato): void {
    pratos.push(produto)
    console.log("Pratos")
    console.table(pratos)
  }
  
  const novoProduto: Prato = {
    nome: process.argv[2],
    custo: Number(process.argv[3]),
    venda: Number(process.argv[4]),
    ingredientes: []
  }
  
  const numeroIngredientes = process.argv.length - 5
  for (let i = 0; i < numeroIngredientes; i++) {
    novoProduto.ingredientes.push(process.argv[5 + i])
  }
  
  cadastraProduto(novoProduto)
  
  
  // b) Escreva uma função que recebe um nome e devolve o valor do produto com este nome.
  
  function pegaPreco(nome: string): number | void {
    for (let prato of pratos) {
      if (prato.nome === nome) {
        return prato.venda
      }
    }
    console.log("Prato não encontrado")
  }
  
  console.log(`Preço de ${novoProduto.nome} = ${pegaPreco(novoProduto.nome)}`)
  
  
  // c) Escreva uma função para que ele venda um prato. Salve as vendas em um array no escopo global
  
  const vendas: Venda[] = []
  
  function vendePrato(nome: string, cliente: string): Venda | void {
    for (let i = 0; i < pratos.length; i++) {
      if (pratos[i].nome === nome) {
        const novaVenda: Venda = {
          nome: pratos[i].nome,
          cliente
        }
        vendas.push(novaVenda)
        return novaVenda
      }
    }
    console.log("Prato para venda não encontrado")
  }
  
  vendePrato("strogonoff", "fulano")
  console.log("Vendas")
  console.table(vendas)
  
  
  // d) Escreva uma função que determine o lucro do restaurante. 
  
  function calculaLucro(): number | void {
    if (vendas.length < 1) {
      console.log("Nenhuma venda realizada")
      return 0
    }
  
    let lucro = 0
  
    function pegaPrato(venda: Venda): Prato | void {
      for (let prato of pratos) {
        if (prato.nome === venda.nome) {
          return prato
        }
      }
    }
  
    for (let venda of vendas) {
      const prato = pegaPrato(venda)
  
      if (prato) {
        lucro -= prato.custo
        lucro += prato.venda
      }
    }
  
    return lucro
  }
  
  console.log(`Lucro = ${calculaLucro()}`)
  