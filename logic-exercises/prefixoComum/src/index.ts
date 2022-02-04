export const  prefixoComun = (palavras:string[]) => {
    if(palavras.length === 0) return ""
    
    let commonPrefix = ""
    for(let i = 0; i < palavras[0].length; i++) {
        let currentChar = palavras[0][i]
    
        
        for(let j = 0; j < palavras.length; j++) {
            if(palavras[j][i] !== currentChar) {
                return commonPrefix
            }
        }
        
        if(currentChar) {
            commonPrefix += currentChar
        }
    }
    
    return commonPrefix
};

