import {Request, Response} from 'express'
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) {}

    async handle(req: Request, res: Response) {
        try {
            const { name, username, email } = req.body
            const user = await this.createUserService.execute(name, username, email)
            return res.status(200).json(user)
        } catch (error) {
            return res.status(400).json({error})
        }
    }
}