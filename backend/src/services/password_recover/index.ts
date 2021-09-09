import { UserRepository } from "../../repositories/implementations/userRepository";
import { RecoverPasswordController } from "./recoverPasswordController";
import { RecoverPassword } from "./recoverPassword";

export default (): RecoverPasswordController => {
  const userRepository = UserRepository.getInstance()
  const recoverPasswordService = new RecoverPassword(userRepository);
  const recoverPasswordController = new RecoverPasswordController(recoverPasswordService);
  return recoverPasswordController;
}