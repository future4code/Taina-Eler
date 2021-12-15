import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    async findUserByEmail(email:string): Promise<User> {
        try {
            const user = await BaseDatabase.connection("lbn_user")
            .select('*')
            .where({email:email});

            return User.toUserModel(user[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}