import { Customer } from "./class/Customer";
import { User } from "./class/User";
import { Client} from "./Light/Client";
import { Commerce, Industry, Place, Residence } from "./Light/Residents";

                                        /*HERANÇA */
//---------------------------------------------------------------------------------------------//
// //Exercício 1
// const newUser = new User("99999","joao@email.com", "Joao", "123456")
// console.log(newUser.getId())
// console.log(newUser.getEmail())
// console.log(newUser.getName())

// //Exercício 2
// const newCustomer = new Customer("99999","joao@email.com", "Joao", "123456","225633251463")
// console.log(newCustomer.getCreditCard())

// //Exercício 3
// const otherCustomer = new Customer("99999","joao@email.com", "Joao", "123456","225633251463")
// console.log(otherCustomer.getId())
// console.log(otherCustomer.getEmail())
// console.log(otherCustomer.getName())
// console.log(otherCustomer.getCreditCard())
// console.log(otherCustomer.purchaseTotal)

// //Exercício 4 e 5
// console.log(otherCustomer.introduceYourself())


                                        /*POLIMORFISMO */
//---------------------------------------------------------------------------------------------//
//Exercício 1
// const client:Client = {
//     name: "Carlos",
//     registrationNumber: 123456789,
//     consumedEnergy: 25,
//     calculateBill : () => {
//         return 2
//     }
// }

// console.log(client)
// console.log(client.calculateBill())

//Exercício 2

// const newPlace: Place = new Place("22222222222") //Não pode pois é abstract

//Exercício 3

/*Agora, crie uma instância de cada uma das classes novas. 
Imprima no console o CEP de cada uma delas, através do método getCep herdado da classe Place.*/

const newResidence: Residence = new Residence(5,"123456789")
console.log(newResidence.getCep())

const newCommerce: Commerce = new Commerce(5,"987654321")
console.log(newCommerce.getCep())

const newIndustry: Industry = new Industry(5,"213546879")
console.log(newIndustry.getCep())


