# Aula 47 - Knex.js 


### Exercício 1 

a)Explique como é a resposta que temos quando usamos o raw:

-- Usando o método raw, qual podemos utilizar a sintaxe do SQL puro por assim dizer, irá nos devolver um array com vários outros dentro deste. Então, primeiramente é retornado a informação qual estamos buscando e posteriormente outros array com informações perminentes do SQL. Assim, a utilização de [0][0] refere-se a ao primeiro array do conjunto.

b)Faça uma função que busque um ator pelo nome:

```
const searchActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE name = "${name}"
    `);
    return result[0]
}
```
**_Endpoint de teste:_**
```
app.get("/actor/name", async (req: Request, res: Response) => {
    try {
        const name: string = req.query.name as string
        console.log(await searchActorByName(name))
        res.end()
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})
```

c)Faça uma função que receba um gender retorne a quantidade de itens na tabela Actor com esse gender. Para atrizes, female e para atores male:

```
const returnQuant = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
       SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    return result[0][0].count
}
```

**_Endpoint de teste:_**
```
app.get("/actor/gender", async (req: Request, res: Response) => {
    try {
        const gender: string = req.query.gender as string
        const result = await returnQuant(gender)
        res.status(200).send({quantidade:result})
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})
```

### Exercício 2

a)Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão:
```
const updateSalary = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where({id: id});
  };
```

**_Endpoint de teste:_**
```
app.put("/actor/:id", async (req: Request, res: Response) => {
    try {
        const id= req.params.id
        const salary = req.body.salary 
        
        await updateSalary(id, Number(salary))
        res.status(200).send("Success!")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})
```

b)Uma função que receba um id e delete um ator da tabela:
```
const deleteActor = async(id:string) : Promise<void> => {
    await connection("Actor")
    .delete()
    .where({id:id})
}
```
**_Endpoint de teste:_**
```
app.delete("/actor/:id", async(req:Request, res:Response) => {
    try {
        const id: string = req.params.id 
        await deleteActor(id)
        res.status(200).send("Success!")
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})
```

c)Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender:
```
const returnAverage = async(gender: string): Promise<any> => {
    const result = await connection("Actor")
    .avg("salary")
    .where({gender:gender})

    return result[0]
}
```

**_Endpoint de teste:_**
```
app.get("/actor/avgsalary", async(req:Request, res:Response) => {
    try {
        const gender: string = req.query.gender as string
        console.log(await returnAverage(gender))
        res.end()
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
})
```


### Exercício 3

a)Crie um endpoint com as especificações:
* Usar a função get do express;
* Definir o path param com a chave id: /actor/:id. Dessa forma, poderemos acessar o endpoint assim: http://localhost:3000/user/id-do-usuario.

**_Função:_**
```
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}
```

```
app.get("/actor/:id", async(req:Request, res:Response) => {
    try {
        const id = req.params.id
        const atores = await getActorById(id)
        res.status(200).send(atores)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})
```

b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um GET (/actor);
* Receber o gênero como um query param (/actor?gender=);
* Devolver a quantidade de atores/atrizes desse gênero.

**_Para esse endpoint será utilizada a função ***returnQuant*** _ na letra c do exercício 1.**
```
app.get("/actor", async(req:Request, res:Response) => {
    try {
        const gender: string = req.query.gender as string
        const quantidade = await returnQuant(gender)
        res.status(200).send(quantidade)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})
```


### Exercício 4

a)Crie um endpoint agora com as seguintes especificações:
* Deve ser um PUT (/actor);
* Receber o salário e o id pelo body;
* Simplesmente atualizar o salário do ator com id em questão .

```
app.put("/ator", async(req:Request, res:Response) => {
    const salary = req.body.salary
    const id = req.body.id
    try {
        await connection("Actor")
    .update({salary: salary})
    .where({id: id});

    res.status(200).send("Success!")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
    
})
```

b)Crie um endpoint agora com as seguintes especificações:
* Deve ser um DELETE (/actor/:id);
* Receber id do ator como path param;
* Simplesmente deletar o ator da tabela.

```
app.delete("/ator/:id", async(req:Request, res:Response) => {
    const id = req.params.id
    try {
        await connection("Actor")
        .delete()
        .where({id:id})

        res.status(200).send("Ator deletado")
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
})

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