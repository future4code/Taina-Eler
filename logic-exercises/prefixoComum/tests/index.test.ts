import { prefixoComun } from "../src";

test("prefixoComun", ()=>{

    const array = ["flower","flow","flight"]

    const result = prefixoComun(array)

    expect(result).toBe("fl");

})

test("prefixoComun", ()=>{

    const array =["dog","racecar","car"]

    const result = prefixoComun(array)

    expect(result).toBe("");

})

test("prefixoComun", ()=>{

    const array =["coracao","cor","corona","coreia"]

    const result = prefixoComun(array)

    expect(result).toBe("cor");

})