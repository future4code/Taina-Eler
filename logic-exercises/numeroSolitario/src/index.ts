export const numeroSolitario = (array:number[], arrray_size:number):number =>{
	let result = array[0];
		for (let i = 1; i < arrray_size; i++)
        result = result ^ array[i];

		return result;
}
