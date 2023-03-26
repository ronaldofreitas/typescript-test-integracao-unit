import User from "../entities/User";

export interface IUserRepository {
    create(name: string, username: string, email: string): Promise<User>;
    exists(username:string):Promise<boolean>;
}