import { UserRepository } from "../../repositories/implementations/userRepository";
import { AuthenticateUserController } from "./authenticateUserController";
import { AuthenticateUser } from "./authenticateUser";

export default (): AuthenticateUserController => {
  const userRepository = UserRepository.getInstance()
  const authenticateUserService = new AuthenticateUser(userRepository);
  const authenticateUserController = new AuthenticateUserController(authenticateUserService);
  return authenticateUserController;
}