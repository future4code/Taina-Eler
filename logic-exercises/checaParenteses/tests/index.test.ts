import { checaParenteses } from "../src";

test("checaParentesesTeste1", ()=>{

    const caracter = "()"

    const result = checaParenteses(caracter)
    
    expect(result).toBe(true);
})

test("checaParentesesTeste2", ()=>{

    const caracter = "()[]{}"

    const result = checaParenteses(caracter)
    
    expect(result).toBe(true);
})

test("checaParentesesTeste3", ()=>{

    const caracter = "(]"

    const result = checaParenteses(caracter)
    
    expect(result).toBe(false);
})

test("checaParentesesTeste4", ()=>{

    const caracter = "([)]"

    const result = checaParenteses(caracter)
    
    expect(result).toBe(false);
})

test("checaParentesesTeste5", ()=>{

    const caracter = "{[]}"

    const result = checaParenteses(caracter)
    
    expect(result).toBe(true);
})