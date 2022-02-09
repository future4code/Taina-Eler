import { palavra2EhAnagramaDe1 } from "../src";

test("Palavra2 é um anagrama da Palavra1", ()=>{

    const palavra1 = "anagrama"
    const palavra2 = "nagarama"

    const result =palavra2EhAnagramaDe1(palavra1,palavra2)

    expect(result).toBe(true);
})

test("Palavra2 é um anagrama da Palavra1", ()=>{

    const palavra1 = "gato"
    const palavra2 = "toga"

    const result =palavra2EhAnagramaDe1(palavra1,palavra2)

    expect(result).toBe(true);
})

test("Palavra2 é um anagrama da Palavra1", ()=>{

    const palavra1 = "gato"
    const palavra2 = "rato"

    const result =palavra2EhAnagramaDe1(palavra1,palavra2)

    expect(result).toBe(false);
})
