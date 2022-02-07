# WIRECARD

### Introdução
Esta API realiza compras através do modo ***BOLETO*** e modo ***CARTAO***, além de mostras todas as compras feitas.

### Overview
Things that the developers should know about
Ao fazer uma compra via boleto, é retornado o código para pagamento. E ao fazer via cartão, é retornada uma mensagem de aprovado.

Ambas url's de compras são iguais, porém é exemplificado duas possibilidades para representar o ***body*** a ser passado mediante a compra por boleto ou cartão.

***Para ambas as compras, deve ser passado um cpf em formato string com 11 caracteres.***

Para as compras com ***cartão*** os valores do  ***card_number*** e do ***card_cvv***, devem ser passados em formato string com 16 caracteres e 3 caracteres, respectivamente.
