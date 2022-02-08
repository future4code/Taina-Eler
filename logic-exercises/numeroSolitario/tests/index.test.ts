import { numeroSolitario } from "../src"

describe("numeroSolitario", ()=>{

    test("numeroSolitario igual a 1",async()=>{
        const array = [2,2,1]
        const array_size = array.length

        const result = numeroSolitario(array,array_size)
    
        expect(result).toBe(1);
    })


    test("numeroSolitario igual a 4",async()=>{
        const array = [4,1,2,1,2]
        const array_size = array.length

        const result = numeroSolitario(array,array_size)
    
        expect(result).toBe(4);
    })
})