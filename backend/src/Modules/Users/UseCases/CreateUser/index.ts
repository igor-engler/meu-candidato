import { UsersRepository } from "../../Repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepositories = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(userRepositories);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };