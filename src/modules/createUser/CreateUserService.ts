// lembra os 'use-cases'

//import User from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

export class CreateUserService {
    constructor(
        private userRepository: IUserRepository
    ){}

    async execute(name: string, username: string, email: string) {
        const userExists = await this.userRepository.exists(username)
        if(userExists) {
            throw new Error('usuario já existe')
        }

        //const userCreate = User.create(name, username, email)
        const user = await this.userRepository.create(name, username, email)
        return user
    }
}
