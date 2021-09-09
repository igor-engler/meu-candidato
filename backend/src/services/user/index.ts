import { UserRepository } from "../../repositories/implementations/userRepository";
import { CreateUserController } from "./createUserController";
import { CreateUser } from "./createUsers";

export default (): CreateUserController => {
  const userRepository = UserRepository.getInstance()
  const createUserService = new CreateUser(userRepository);
  const createUserController = new CreateUserController(createUserService);
  return createUserController;
}