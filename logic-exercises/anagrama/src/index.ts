export const palavra2EhAnagramaDe1 =(palavra1: string, palavra2: string) => {
	return palavra1.split("").sort().join("") === palavra2.split("").sort().join("")
}

console.log(palavra2EhAnagramaDe1("anagrama", "nagarama"))