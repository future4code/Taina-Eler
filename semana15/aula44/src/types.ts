export enum TYPE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL",
}

export type User = {
    id: number,
    name: string,
    email: string,
    type: TYPE,
    age: number
}