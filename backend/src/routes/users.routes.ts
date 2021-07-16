import { response, Router } from "express";
import { UsersRepository } from "../Modules/Users/Repositories/UsersRepositories";
import { CreateUserService } from "../Modules/Users/Services/CreateUserService";

const UserRoutes = Router();
const usersRepositories = new UsersRepository();

UserRoutes.post('/', (request, response) => {
    const { email, name, password } = request.body;

    const createUserService = new CreateUserService(usersRepositories);
    createUserService.execute({ email, name, password });

    return response.status(201).send();
});

UserRoutes.get('/', (request, response) => {
    const all = usersRepositories.list();

    return response.status(201).json(all);
});

export { UserRoutes };