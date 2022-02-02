export const indexOf = (
    fonte: string,
    elementoDaPesquisa: string,
    mainIndex: number = 0,
    fonteIndex: number = 0,
    elementoDaPesquisaIndex: number = 0
  ): number => {
      //não existe 
    if (fonteIndex > fonte.length) {
      return -1;
    }
  
    if (elementoDaPesquisaIndex >= elementoDaPesquisa.length) {
      return mainIndex;
    }
  
    if (fonte[fonteIndex] === elementoDaPesquisa[elementoDaPesquisaIndex]) {
      return indexOf(fonte, elementoDaPesquisa, mainIndex, fonteIndex + 1, elementoDaPesquisaIndex + 1);
    } else {
      return indexOf(fonte, elementoDaPesquisa, mainIndex + 1, mainIndex + 1, 0);
    }
  };