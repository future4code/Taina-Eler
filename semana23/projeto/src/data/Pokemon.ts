const xlsxj = require("xlsx-to-json");
xlsxj({
  input: "Pokemon.xlsx", 
  output: "Pokemon.json"
}, function(err: any, result: any) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }
});

