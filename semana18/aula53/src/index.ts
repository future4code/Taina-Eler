import { Customer } from "./class/Customer";
import { User } from "./class/User";
import { Client } from "./Light/Client";

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
const client:Client = {
    name: "Carlos",
    registrationNumber: 123456789,
    consumedEnergy: 25,
    calculateBill : () => {
        return 2
    }
}

console.log(client)
console.log(client.calculateBill())