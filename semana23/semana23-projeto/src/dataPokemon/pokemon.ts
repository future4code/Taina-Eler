const xlsxj = require("xlsx-to-json")
  xlsxj({
    input: "./src/dataPokemon/pokemonGo.xlsx", 
    output: "./src/dataPokemon/pokemonGo.json"
  }, function(err: any, result: any) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });