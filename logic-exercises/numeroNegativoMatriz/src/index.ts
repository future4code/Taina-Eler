
export const numerosNegativosMatriz = (matriz:number[][]):number => {
    let contador = 0;
 for(let i = 0; i < matriz.length;i++) {
   for(let j = 0; j < matriz[i].length;j++) {
    if(matriz[i][j] < 0) {
        contador++;
      }
   } 
  }
    return contador;  
};

