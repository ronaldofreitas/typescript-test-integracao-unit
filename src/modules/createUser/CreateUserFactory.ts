import { UserPrismaRepository } from "../../repositories/prisma/UserPrismaRepository"
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService"

export const CreateUserFactory = () => {
    const userRepository = new UserPrismaRepository();
    const createUserService = new CreateUserService(userRepository);
    const createUserController = new CreateUserController(createUserService);
    return createUserController
}