import { numerosNegativosMatriz } from "../src";

describe("Existem quantos números negativos na matriz", ()=> {
    test("Existem 8 números negativos na matriz", ()=>{

        const matriz = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    
        const result = numerosNegativosMatriz(matriz)
    
        expect(result).toBe(8)
    })

    test("Existem 0 números negativos na matriz", ()=>{

        const matriz = [[3,2],[1,0]]
    
        const result = numerosNegativosMatriz(matriz)
    
        expect(result).toBe(0)
    })

    test("Existem 3 números negativos na matriz", ()=>{

        const matriz = [[1,-1],[-1,-1]]
    
        const result = numerosNegativosMatriz(matriz)
    
        expect(result).toBe(3)
    })

    test("Existe 1 número negativo na matriz", ()=>{

        const matriz = [[-1]]
    
        const result = numerosNegativosMatriz(matriz)
    
        expect(result).toBe(1)
    })
})
