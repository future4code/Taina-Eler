export const  ladraoDeCasas = (array:number[]):number => {
    const roubo =(index:number):number => {
      if(index >= array.length) {
        return 0;
      }
      return Math.max(array[index] + roubo(index + 2), roubo(index + 1));
    }
    return roubo(0);
}