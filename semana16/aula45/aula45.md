# Aula 45 - Banco de Dados e Introdução a SQL



### Exercício 1 

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

```
a) VARCHAR - restringe a quantidade máxima de caracteres, porém de uma forma dinâmica. Ou seja, caso exista menos caracter do que o mencionado, os espaços não utilizados serão dispensados.
DATE - dita o formato de data em ano-mês-dia.
NOT NULL - implica que é obrigatório preencher essas variáveis.

b) SHOW DATABASES - irá mostrar todas as bases de dados presente.
SHOW TABLES - irá mostrar todas as tabelas na atual base de dados.

c) DESCRIBE nome da tabela - descreve todos os campos da tabela, assim como o tipo de dado de cada campo.

### Exercício 2

a) Código para inserir informações na tabela:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("001", "Tony Ramos",400000,"1948-08-25", "male"),
("002", "Glória Pires",1200000,"1963-08-23", "female");

```

b)Código para inserir informações na tabela:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("002", "Tio Patinhas",2000000000,"1910-01-25", "male");

```
Isto resulta no erro code 1062, em que cada elemento deve possuir um id específico. Neste caso, o id 002 já está sendo utilizado.

c)Código com erro e como consertar:
```
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

```
Neste caso está sendo restringido a apenas 3 informações, e estão sendo passadas 5 informações, além de serem obrigatórios e não possuírem preenchimento por default. Então, é necessário acrescentar birth_date e gender.

d)Código com erro e como consertar:
```
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

```
Os campo nome além de ser obrigatório, não possui preenchimento por default. Então, é necessário acrescentar name dentro de INSERT e o real nome dentro de VALUES.

e)Código com erro e como consertar:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

```
Os campo birth_date apresenta a data no formato padrão, porém esse campo deve ser preenchido entre aspas. Sem colocar as aspas o programa entende como uma operação matemática. Assim, o certo seria "1979-03-26".

e) Inserindo mais 2 atores a tabela:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Rodrigo Santoro",500000,"1975-08-22", "male"),
("007", "Grazi Massafera",300000,"1982-06-28", "female");

```

### Exercício 3

a) Retornando apenas as atrizes da tabela Actor:
```
SELECT * FROM Actor
WHERE gender="female";

```

b) Retornando o salário do Tony Ramos da tabela Actor:
```
SELECT salary FROM Actor
WHERE name="Tony Ramos";

```
c) Retornando informações de alguém que tenha o gênero com o nome invalid da tabela Actor:
```
SELECT * FROM Actor
WHERE gender="invalid";

```
Não vai retornar ninguém, pois nenhum ator foi atribuído com este gênero.

d) Retornando id,nome e salário de todos que tenham salário de até R$500.000,00 da tabela Actor:
```
SELECT id,name,salary FROM Actor
WHERE salary <= 500000;

```

d) Utilizando query com erro:
```
SELECT id, nome from Actor WHERE id = "002"

```
Não existe propriedade na tabela que receba como título a palavra nome. Neste caso teria que ser trocado por name.

### Exercício 4

a) Retorna todos que possuem nome começando aom a ou j e que tenham salários acima de R$300.000,00. Sendo a questão do nome tida como prioridade para esta operação.
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

```

b) Retorna todos que não possuem o nome começando com a letra a e que tenham salários acima de R$350.000,00.
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

```

c) Query com os atores que possuam "G" ou "g" em qualquer parte do nome. Não há distinção entre maiúsculo e minúsculo.
```
SELECT * FROM Actor
WHERE name LIKE "%g%";

```

d) Query com os atores que possuam "a" ou "A" ou "G" ou "g" em qualquer parte do nome e o salário entre R$350.000,00 e R$900.000,00. 
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

```

### Exercício 5
Criação de tabela que representa filmes:

```
CREATE TABLE Movies(
id VARCHAR(255) PRIMARY KEY,
title VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
launch_date DATE NOT NULL,
grade INT NOT NULL
);

```

### Exercício 6
a)  Retorne o id, título e avaliação a partir de um id específico:

```
SELECT id, title, grade FROM Movies
WHERE id="002";

```

b)  Retorne um filme a partir de um nome específico:

```
SELECT * FROM Movies
WHERE title="Se Eu Fosse Você";

```

c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7:

```
SELECT id, title, synopsis FROM Movies
WHERE grade < 7;

```

### Exercício 7
a) Retorna um filme cujo título contenha a palavra vida:

```
SELECT * FROM Movies
WHERE title LIKE "%vida%";

```

b) Buscando pela palavra dois no título ou sinopse:

```
SELECT * FROM Movies
WHERE title LIKE "%dois%" OR synopsis LIKE "%dois%";

```

C) Todos os que já tenham sido lançados até hoje 22/11/2021:

```
SELECT * FROM Movies
WHERE launch_date < "2021-11-22";

```

d) Todos os que já tenham sido lançados até hoje 22/11/2021 com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7:

```
SELECT * FROM Movies
WHERE launch_date < "2021-11-22" AND (title LIKE "%peça%" OR synopsis LIKE "%peça%") AND grade > 7;

```