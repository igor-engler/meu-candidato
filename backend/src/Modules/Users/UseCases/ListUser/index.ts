import { UsersRepository } from "../../Repositories/implementations/UsersRepository";
import { ListUserController } from "./ListUserController";
import { ListUserUseCase } from "./ListUserUseCase";

const userRepositories = UsersRepository.getInstance();

const listUserCase = new ListUserUseCase(userRepositories);

const listUserController = new ListUserController(listUserCase);

export { listUserController };