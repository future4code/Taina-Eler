const colors = require("colors")

let listaDeTarefas = ["lavar", "cozinhar"]

let tarefa = process.argv[2]

listaDeTarefas.push(tarefa)

console.log(`Tarefas: ${listaDeTarefas}`.blue)