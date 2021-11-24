# Aula 47 - Knex.js 



### Exercício 1 

a)Explique como é a resposta que temos quando usamos o raw:

-- Usando o método raw, qual podemos utilizar a sintaxe do SQL puro por assim dizer, irá nos devolver um array com vários outros dentro deste. Então, primeiramente é retornado a informação qual estamos buscando e posteriormente outros array com informações perminentes do SQL. Assim, a utilização de [0][0] refere-se a ao primeiro array do conjunto.

b)Faça uma função que busque um ator pelo nome:

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) O seguinte comando altera o nome da categoria gender por gender, e o limita a 255 caracteres:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
d) O seguinte comando altera o nome da categoria gender por gender, e o limita a 100 caracteres:

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```


### Exercício 2

a) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003:
```
UPDATE Actor
SET 
name="Cláudia Raia",
birth_date="1966-12-23"
WHERE id="003";
```

b)Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior:
```
UPDATE Actor
SET name="JULIANA PAES"
WHERE id="005";
```
Voltando ao anterior Juliana Paes:

```
UPDATE Actor
SET name="Juliana Paes"
WHERE name="JULIANA PAES";
```

c)Escreva uma query que atualize todas as informações do ator com o id 005:
```
UPDATE Actor 
SET
 name="Alexandre Borges",
salary= 250000,
birth_date = "1966-02-23",
gender="male"
WHERE id="005";
```

d) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado:
```
UPDATE Actor
SET gender="female"
WHERE id="010";
```
RESPONSE : 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Essa resposta não diga explicitamente que é um erro, porém como não existe nenhum id 010 consequentemente nenhuma linha sofre alteração.


### Exercício 3

a)Escreva uma query que apague a atriz com o nome Cláudia Raia:
```
DELETE FROM Actor
WHERE name="Cláudia Raia";
```

b)Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que R$1.000.000,00:
```
DELETE FROM Actor
WHERE gender="male" AND salary > 1000000;
```


### Exercício 4

a)Escreva uma query que pegue o maior salário de todos os atores e atrizes:
```
SELECT MAX(salary)
FROM Actor;
```

b)Escreva uma query que pegue o menor salário das atrizes:
```
SELECT MIN(salary) FROM Actor 
WHERE gender="female";
```

c)Escreva uma query que pegue a quantidade de atrizes:
```
SELECT COUNT(*) FROM Actor
WHERE gender="female";
```

d) Escreva uma query que pegue a soma de todos os salários:
```
SELECT SUM(salary) FROM Actor;
```



