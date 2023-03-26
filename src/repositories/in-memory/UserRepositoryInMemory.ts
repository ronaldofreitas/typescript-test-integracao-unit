import User from "../../entities/User";
import { IUserRepository } from "../IUserRepository";
import { v4 as uuid } from "uuid";

export class UserRepositoryInMemory implements IUserRepository {

    private users: User[] = [];

    async create(name: string, username: string, email: string): Promise<User> {
        const newuser = new User(name, username, email)
        Object.assign(newuser, {
            id: uuid(),
        });
        //newuser.getName
        const id = uuid() as string
        this.users.push(newuser)
        return newuser
    }

    async exists(username: string): Promise<boolean> {
        const user = this.users.some((user) => user.username === username)
        return user
    }
    
}