# Aula 48 - Relações em SQL



### Exercício 1 

a)Explique o que é uma chave estrangeira:

-- A FOREIGN KEY é usada para referenciar uma tabela a outra através da PRIMARY KEY.

b)Crie a tabela e, ao menos, uma avaliação para cada um dos filmes:

```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
```
```
INSERT INTO Rating  
VALUES ("102","Bom!",7,"002"),
("103","Muito bom!",8.9,"003"),
("104","Excelente!",9.7,"004");
```

c)Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query. Neste caso, sendo criado para o id 005 que não existe:

```
INSERT INTO Rating  
VALUES ("105","Bom!",6.8,"005");
```
RESPOSTA: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails...

--Esta resposta diz que o id procurado não existe.

d)Altere a tabela de filmes para que ela não tenha mais uma coluna chamada grade:

```
ALTER TABLE Movies 
DROP COLUMN grade;
```

d)Tente apagar um filme que possua avaliações. Anote e explique o resultado da query:

```
DELETE FROM Movies
WHERE grade = 9;
```
RESPOSTA: Error Code: 1054. Unknown column 'grade' in 'where clause'
-- Como a coluna grade foi apagada anteriormente, não tenho mais como acessá-la.


### Exercício 2

a)Tabela com elenco do filme, relação N:M:
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```
-- Nesta tabela, cada filme x possui um ator y.

b)Crie, ao menos, 6 relações nessa tabela :
```
INSERT INTO MovieCast Values
('002', '001'), ('002','002'), ('003','002'), ('004','007'),
('002','001'), ('004','005');
```

c)Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query:
```
insert into MovieCast values
("002", "010");
```
RESPOSTA: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails...

--Esta resposta diz que o id procurado não existe.

d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query:
```
DELETE FROM Actor
WHERE id="001";
```
RESPOSTA : Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails...


--Essa resposta diz que como o ator está atrelado a uma outra tabela, existe uma hierarquia e ele não poderá ser apagado até que se apague as as suas refências nas outras tabelas.


### Exercício 3

a)Está query junta as informações de Movies com a tabela Rating ON(onde, tomando os casos em que) o id de Movies corresponde ao movie_id de Rating:
```
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

b)Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados:
```
SELECT title,  movie_id,  rate FROM Movies 
INNER JOIN Rating  ON Movies.id = Rating.movie_id;
```


