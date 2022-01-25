# Aula 53 - Herança e Polimorfismo



-----------------------------------------------**HERANÇA**-----------------------------------------------

### Exercício 1

a)Seria possível imprimir a senha (password) atrelada a essa instância?
* Não, pois não foi criado um método getter para gerar a visualização desse atributo.


b)Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
* Apenas uma vez.



### Exercício 2

a)Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
* Apenas uma vez.


b)Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
* Apenas uma vez.



### Exercício 3
a)Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
* Não, pois é uma informação privada e e não existe, ainda, nenhum método para visualizar essa informação.



-----------------------------------------------**POLIMORFISMO**-----------------------------------------------

### Exercício 1

a)Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
* Todas as propriedades, porém o método ***calculateBill*** por ser uma função(método), só é possível ver seu valor invocando a ***variável.método***.


### Exercício 7
Criar um endpoint com as especificações:
* Deve ser um GET (/movie/search);
* Deve receber o termo de busca como uma query string (/movie/search?query=);
* Faz a busca entre todos os filmes que tenham o termo de busca no nome ou na sinopse. Além disso, a lista deve vir ordenada pela data de lançamento.

Função de retornar o filme pelo termo de busca no nome ou sinopse:

**MÉTODO RAW**
```
const returnTermo = async(palavra:string):Promise<any> => {
    const resultado = await connection.raw(`
    SELECT * FROM Movies
     WHERE title LIKE "%${palavra}%" OR synopsis LIKE "%${palavra}%"
     ORDER BY launch_date ASC;
    `)  
    return resultado[0]
}
```

**QUERY BUILDER**
```
const returnTermo = async(palavra:string):Promise<any> => {
    const resultado = await connection("Movies")
    .where("title", "like", `%${palavra}%`)
    .orWhere("synopsis", "like", `%${palavra}%`)
    .orderBy('launch_date');
    
    return resultado
}
```

Requisição:
```
app.get("/movie/search", async(req:Request, res:Response) => {
    try {
        const movies = await returnTermo(req.query.palavra as string)
        res.status(200).send(movies)
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
})
```