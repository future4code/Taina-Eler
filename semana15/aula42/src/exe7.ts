enum CATEGORIA {
    VERAO = "Verão",
    INVERNO = "Inverno",
    BANHO = "Banho",
    INTIMA = "Íntima"
}

enum DESCONTO {
    VERAO = 0.05,
    INVERNO = 0.1,
    BANHO = 0.04,
    INTIMA = 0.07
}

type Produtos = {
    nome: string,
    preco: number,
    classificacao: CATEGORIA,
    preco_desconto?: DESCONTO
}

const mockProdutos: Produtos[] = [
    {
      nome: "blusa",
      preco: 50,
      classificacao: CATEGORIA.INVERNO
    },
    {
      nome: "regata",
      preco: 25,
      classificacao: CATEGORIA.VERAO
    }
  ]


const retornaCompra = (produtos: Produtos[]): Produtos[] | [] => {
    return produtos.map((produto) => {
        let desconto = 0
        switch (produto.classificacao) {
            case CATEGORIA.VERAO:
                desconto = DESCONTO.VERAO
                break
            case CATEGORIA.INVERNO:
                desconto = DESCONTO.INVERNO
                break
            case CATEGORIA.BANHO:
                desconto = DESCONTO.BANHO
                break
            case CATEGORIA.INTIMA:
                desconto = DESCONTO.INTIMA
                break
            default:
                console.log("Categoria inválida")
        }

        return {
            nome: produto.nome,
            preco: produto.preco,
            classificacao: produto.classificacao,
            preco_desconto: (produto.preco*(1-desconto))
        }
    })
}

console.log(retornaCompra(mockProdutos))