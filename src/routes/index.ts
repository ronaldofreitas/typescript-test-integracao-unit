import { Router } from 'express'
import { CreateUserFactory } from '../modules/createUser/CreateUserFactory'

const routes = Router();

routes.post("/users", (req, res) => {
    CreateUserFactory().handle(req, res)
})

export { routes }