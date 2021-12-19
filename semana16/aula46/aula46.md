# Aula 46 - Aprofundamento SQL



### Exercício 1 

a) O seguinte comando altera a tabela Actor, deletando a coluna salary:

```
ALTER TABLE Actor DROP COLUMN salary;

```
 
b) O seguinte comando altera o nome da categoria gender por sex, e o limita a 6 caracteres:

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


### Exercício 5

a) A query abaixo retorna a quantidade de atores e atrizes na tabela, ou seja, em relação ao gender:
```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```
Essa query irá verificar toda a tabela, separando a quantidade por gênero.


b)Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética:
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)Faça uma query que retorne todos os atores ordenados pelo salário:
```
SELECT * FROM Actor
ORDER BY salary;
```

d) Faça uma query que retorne os atores com os três maiores salarios:
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)Faça uma query que retorne a média de salário por gênero:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```


### Exercício 6

a)Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema:
```
ALTER TABLE Movies
ADD playing_limit_date VARCHAR(255);
```

b)Altere a tabela de Movie para que o parâmetro grade possa aceitar valores não inteiros, como, por exemplo, uma avaliação 8.5:
```
ALTER TABLE Movies
CHANGE grade grade FLOAT;
```

c)Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído:
```
UPDATE Movies                            
SET
playing_limit_date = "2021-12-12"
WHERE id = "001";
```
```
UPDATE Movies
SET
playing_limit_date = "2019-12-25"
WHERE id = "002";
```

d)Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique:
```
DELETE FROM Movies
WHERE id="001";
```
```
UPDATE Movies
SET synopsis="sjjdjdfkaklalvknalknvlkavkklnlksnvklnkqnvjvkvksqvsvosnqo"
WHERE id="001";
```
RESPONSE :0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Essa resposta não diga explicitamente que é um erro, porém como não existe nenhum id 001 consequentemente nenhuma linha sofre alteração.


### Exercício 7

a)Quantos filmes em cartaz possuem avaliações maiores do que 7.5:
```
SELECT COUNT(*) FROM Movies
WHERE grade > 7.5;
```

b)Qual a média das avaliações dos filmes?
```
SELECT AVG(grade) FROM Movies;
```

c)Qual a quantidade de filmes em cartaz?
```
SELECT COUNT(*) FROM Movies
WHERE playing_limit_date >=CURDATE();
```

d)Qual a quantidade de filmes que ainda irão lançar?
```
SELECT COUNT(*) FROM Movies
WHERE launch_date > CURDATE();
```

e)Qual a maior nota dos filmes?
```
SELECT MAX(grade) FROM Movies;
```
Outra froma de encontrar:
```
SELECT * FROM Movies
ORDER BY grade DESC
LIMIT 1;
```

f)Qual a menor nota dos filmes?
```
SELECT MIN(grade) FROM Movies;
```
Outra froma de encontrar:
```
SELECT * FROM Movies
ORDER BY grade ASC
LIMIT 1;
```

### Exercício 8

a)Retorne todos os filmes em ordem alfabética:
```
SELECT * FROM Movies
ORDER BY title ASC;
```

b)Retorne os 5 primerios filmes em ordem descrente alfabética:
```
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;
```

c)Retorne os 3 filmes mais recentes em cartaz:
```
SELECT * FROM Movies
WHERE launch_date < CURDATE()
ORDER BY launch_date DESC
LIMIT 3;
```

d)Retorne os 3 filmes melhor avalidos:
```
SELECT * FROM Movies
ORDER BY grade DESC
LIMIT 3;
```



