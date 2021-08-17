import { UsersRepository } from "../../Infra/Firebase/Repositories/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
    const userRepositories = UsersRepository.getInstance();
    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepositories);
    const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);
    return authenticateUserController;
}