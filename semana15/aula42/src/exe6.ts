enum Sigla  {
    AC = "AC",
    DC = "DC"
}

enum IdadeHist {
    PRE_HISTORIA = "Pré-História",
    IDADE_ANTIGA = "Idade Antiga",
    IDADE_MEDIA = "Idade Média",
    IDADE_MODERNA = "Idade Moderna",
    IDADE_CONTEMPORANEA = "Idade Contemporânea"
}

const ano = Number(process.argv[2])
const sigla = process.argv[3] as Sigla

const determinaIdadeHistorica = (
    ano: number, 
    sigla: Sigla | Sigla.DC) : IdadeHist| void=>{
    if(isNaN(ano)){
        return console.log("Insira um número no primeiro argumento")
    }

    switch(sigla.toUpperCase()){
        case Sigla.AC:
            if(ano < 4000){
                return IdadeHist.PRE_HISTORIA
            }else{
                return IdadeHist.IDADE_ANTIGA
            }
        
            case Sigla.DC:
                if(ano<476){
                    return IdadeHist.IDADE_ANTIGA
                }else if(ano < 1453){
                    return IdadeHist.IDADE_MEDIA
                }else if(ano<1789){
                    return IdadeHist.IDADE_MODERNA
                }else{
                    return IdadeHist.IDADE_CONTEMPORANEA
                }
            default:
                console.log("Sigla Inválida")
    }

}

const result = determinaIdadeHistorica(ano, sigla)
result && console.log(result)