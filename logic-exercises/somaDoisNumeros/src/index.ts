export const somaDoisNumeros = (array:number[], numero:number) => {
    for (let index = 0; index < array.length; index++) {
        const diff = numero - array[index];
        const diffIndex = array.indexOf(diff);
        if (diffIndex !== -1 && diffIndex !== index) {
            return [index, diffIndex];
        }
    }
};


