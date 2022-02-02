import { indexOf } from "../src"

test("indexOfMétodo", ()=>{

    const fonte = "abcdefghijklmnopqrstuvwxyz"
    const elementoDaPesquisa1 = "c"
    const elementoDaPesquisa2 = "2"

    const result1 = indexOf(fonte,elementoDaPesquisa1)
    const result2 = indexOf(fonte,elementoDaPesquisa2)

    expect(result1).toBe(2);
    expect(result2).toBe(-1);


})
