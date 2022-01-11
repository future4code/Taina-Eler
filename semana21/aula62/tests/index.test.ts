import { performPurchase } from "../src"


describe("o que retorna", ()=>{

    test("performPurchase", ()=>{

        const result = performPurchase({nome:"lu", saldo:70}, 50)

        expect(result).toEqual({
            nome:"lu",
            saldo: 20
        })
    })
})


