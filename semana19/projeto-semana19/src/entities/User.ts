export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN" 
}

export class User {
    private id: string
    private name: string
    private email: string
    private password: string
    private role: USER_ROLES


    constructor(id:string, name:string, email:string, password:string, role:USER_ROLES){
        this.id = id
        this.name = name
        this.email = email
        this.password = password 
        this.role = role
    }

    static toUserModel(data:any):User {
        return new User(data.id, data.name, data.email, data.password, data.role)
    }
}