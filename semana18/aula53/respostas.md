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


### Exercício 2
a)Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
* RESPOSTA DO TYPESCRIPT : "Cannot create an instance of an abstract class.".

b)Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
* Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última


### Exercício 3
a)Por que a Place não é uma interface?
* Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

b)Por que a classe Place é uma Classe Abstrata?
* Por fim, ela é abstrata por um motivo simples. O nosso sistema possui 3 tipos de lugares e preferimos criar uma classe para representar cada um deles. Então não há motivos para querermos instanciar um objeto do tipo Place porque, no nosso contexto, todos os casos deles já estão cobertos por outras classes. Isso responde à terceira pergunta: Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.
