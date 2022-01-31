import { validaPersonagem } from "../src"

//Posso deixar todos os consts com mesmo nome,pois é local

describe("Função validaPersonagem", () => {

    test("Nome vazio '' ", () => {

        const personagemTeste1 = validaPersonagem({
            nome: "",
            vida: 1500,
            defesa: 700,
            forca: 80
        })
        expect(personagemTeste1).toBe(false)
    })

    test("Vida igual a zero ", () => {

        const personagemTeste2 = validaPersonagem({
            nome: "Juno",
            vida: 0,
            defesa: 700,
            forca: 80
        })
        expect(personagemTeste2).toBe(false)
    })

    test("Força igual a zero ", () => {

        const personagemTeste3 = validaPersonagem({
            nome: "Juno",
            vida: 1500,
            defesa: 700,
            forca: 0
        })
        expect(personagemTeste3).toBe(false)
    })

    test("Defesa igual a zero ", () => {

        const personagemTeste4 = validaPersonagem({
            nome: "Juno",
            vida: 1500,
            defesa: 0,
            forca: 80
        })
        expect(personagemTeste4).toBe(false)
    })

    test("Vida ou a força ou a defesa com um valor negativo ", () => {

        const personagemTeste5 = validaPersonagem({
            nome: "Juno",
            vida: 1500,
            defesa: -59,
            forca: 80
        })
        expect(personagemTeste5).toBe(false)
    })

    test("Informações validadas positivamente", () => {

        const personagemTeste6 = validaPersonagem({
            nome: "Juno",
            vida: 1500,
            defesa: 92,
            forca: 80
        })
        expect(personagemTeste6).toBe(true)
    })
})