import { ladraoDeCasas } from "../src";

test("ladraoDeCasas", ()=>{

    const array = [1,2,3,1]

    const result = ladraoDeCasas(array)

    expect(result).toBe(4);
})


test("ladraoDeCasas", ()=>{

    const array = [2,7,9,3,1]

    const result = ladraoDeCasas(array)

    expect(result).toBe(12);
})


test("ladraoDeCasas", ()=>{

    const array = [2,3,6,12,3,9,11,4]

    const result = ladraoDeCasas(array)

    expect(result).toBe(28);
})