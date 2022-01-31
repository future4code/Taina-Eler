import { v4 } from "uuid"

class IdGeneration {
    generateId = ():string => {
        return v4()
    }
}


export default IdGeneration