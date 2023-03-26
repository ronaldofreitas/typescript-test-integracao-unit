import { prisma } from "../../database/client";
import User from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserPrismaRepository implements IUserRepository {

    async create(name: string, username: string, email: string): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name, username, email
            }
        })
        return user
    }

    async exists(username: string): Promise<boolean> {
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })
        return !!user
    }

}