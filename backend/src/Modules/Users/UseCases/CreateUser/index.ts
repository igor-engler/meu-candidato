import { UsersRepository } from "../../Infra/Firebase/Repositories/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default (): CreateUserController => {
    const userRepositories = UsersRepository.getInstance();
    const createUserUseCase = new CreateUserUseCase(userRepositories);
    const createUserController = new CreateUserController(createUserUseCase);
    return createUserController;
}