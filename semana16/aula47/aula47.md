# Aula 47 - Knex.js 


### Exercício 1 

a)Explique como é a resposta que temos quando usamos o raw:

-- Usando o método raw, qual podemos utilizar a sintaxe do SQL puro por assim dizer, irá nos devolver um array com vários outros dentro deste. Então, primeiramente é retornado a informação qual estamos buscando e posteriormente outros array com informações perminentes do SQL. Assim, a utilização de [0][0] refere-se a ao primeiro array do conjunto.

b)Faça uma função que busque um ator pelo nome:

```

```

c)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male:

```

```


### Exercício 2

a)Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão:
```

```

b)Uma função que receba um id e delete um ator da tabela:
```

```

c)Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender:
```

```


### Exercício 3

a)Crie um endpoint com as especificações:
* Usar a função get do express;
* Definir o path param com a chave id: /actor/:id. Dessa forma, poderemos acessar o endpoint assim: http://localhost:3000/user/id-do-usuario.

```

```

b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um GET (/actor);
* Receber o gênero como um query param (/actor?gender=);
* Devolver a quantidade de atores/atrizes desse gênero.

```

```


### Exercício 4

a)Crie um endpoint agora com as seguintes especificações:
* Deve ser um PUT (/actor);
* Receber o salário e o id pelo body;
* Simplesmente atualizar o salário do ator com id em questão .

```

```


b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um DELETE (/actor/:id);
* Receber id do ator como path param;
* Simplesmente deletar o ator da tabela.

```

```





### Exercício 5
Criar um endpoint com as especificações:
* Deve ser um POST (/movie);
* Receber todas as informações pelo body;
* Criar o filme na tabela.

Função para criar o filme:
```
const createMovie = async(
    id:string,
    title:string,
    synopsis:string,
    launch_date:Date

):Promise<void> => {
    await connection
    .insert({
        id: id,
        title:title,
        synopsis:synopsis,
        launch_date:launch_date
    })
    .into("Movies")
}
```

Requisição:
```
app.post("/movie", async(req:Request, res:Response) => {
    try {
        await createMovie(
            req.body.id,
            req.body.title,
            req.body.synopsis,
            req.body.launch_date
        )

        res.status(200).send("Filme criado")
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }

})
```


### Exercício 6
Criar um endpoint com as especificações:
* Deve ser um GET (/movie/all);
* Não recebe nada;
* Retorna todos os filmes. Ele deve retornar, no máximo, uma lista com 15 itens.

Função de retornar no máximo 15 filme:
```
const return15Movies = async():Promise<any> => {
    const resultado = await connection
    .limit(15)
    .into("Movies")

    return resultado
}

```

Requisição:
```
app.get("/movie/all", async(req:Request, res:Response) => {
    try {
        const result = await return15Movies()
        res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
})
```


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