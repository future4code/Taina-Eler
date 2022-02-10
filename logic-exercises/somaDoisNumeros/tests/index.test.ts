import { somaDoisNumeros } from "../src";

test("Retorna o index que forma a soma do número", ()=>{

    const array = [2, 7, 11, 15]
    const numero = 9

    const result = somaDoisNumeros(array,numero)

    expect(result).toEqual([0,1]);
})

test("Retorna o index que forma a soma do número", ()=>{

    const array = [4, 5, 10, 12, 21]
    const numero = 17

    const result = somaDoisNumeros(array,numero)

    expect(result).toEqual([1,3]);
})