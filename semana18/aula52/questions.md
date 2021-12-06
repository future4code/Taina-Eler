# Aula 52 - Classes e Encapsulamento



### Exercício 1 

a)Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?

-- O construtor é uma função definida na classe por onde passamos os parâmetros, os atributos, da classe.
Por exemplo, na classe abaixo os atributos title e rating são requisitos obrigatórios. Então, são requisitados pela função construtor.
```
class Movie{
   title: string;
   rating: number

   constructor(title: string, rating: number){
      this.title =  title;
      this.rating = rating;
   }
}

```

Posso chamar essa classe passando os parâmetros da função construtor que serão atribuídos ao title e rating, com new NOME_DA_CLASSE.
```
const it = new Movie("IT: The Thing", 6)

```

b)Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?

-- Foi impressa uma vez.
```
Chamando o construtor da classe UserAccount
UserAccount {
  balance: 0,
  transactions: [],     
  cpf: '111-111-111-11',
  name: 'Exercício 1',  
  age: 30
}
```

c) Como conseguimos ter acesso às propriedades privadas de uma classe?

-- Só é posível ter acesso às propriedades privadas se estivermos dentro da classe. Para fazer esse controle, é comum manter os atributos como privados e controlar o acesso por métodos públicos como ***getters*** e ***setters***.
Por exemplo se eu quiser redefinir o título do filme da letra a, posso criar uma função chamada ***setTitle***:
```
class Movie{
   private title: string;
   rating: number

   constructor(title: string, rating: number){
      this.title =  title;
      this.rating = rating;
   }

   public setTitle( newTitle: string){
       this.title = newTitle
   }
}
```
