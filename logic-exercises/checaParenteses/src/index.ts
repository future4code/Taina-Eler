export const checaParenteses = (caracter:string):boolean => {
    const array: string[] = [];
  
    for (let char of caracter) {
      if (char === "(" || char === "[" || char === "{") {
        array.push(char);
      } else {
        const lastOpeningChar = array.pop();
        if(!lastOpeningChar) {
          return false
        } else if (
          (lastOpeningChar === "(" && char !== ")") ||
          (lastOpeningChar === "[" && char !== "]") ||
          (lastOpeningChar === "{" && char !== "}")
        ) {
          return false;
        }
      }
    }
  
    if (array.length > 0) {
      return false;
    }
  
    return true;
  }

  console.log(checaParenteses("(]"))