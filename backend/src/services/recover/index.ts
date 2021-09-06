import { UserRepository } from "../../repositories/implementations/userRepository";
import { RecoverUserController } from "./recoverUserController";
import { RecoverUser } from "./recoverUser";

export default (): RecoverUserController => {
    const userRepository = UserRepository.getInstance()
    const createUserService = new RecoverUser(userRepository);
    const createUserController = new RecoverUserController(createUserService);
    return createUserController;
}