import { IUserRepository } from "../../Repositories/IUserRepository";
import { hash } from "bcrypt";

/**
 * Interface que contem os parâmetros do Request.
 *
 * @property email - String.
 * @property name - String.
 * @property password - String.
 * @property list_favorites - Array of Numbers
 */
interface IRequest {
    email: string;
    name: string;
    password: string;
}

/**
 * Classe responsável por criar um novo usuário.
 *
 * @property @private userRepositories - {@link IUserRepository}
 *
 * @method execute
 *
 * @exports CreateUserUseCase
 */
class CreateUserUseCase {
    constructor(private userRepositories: IUserRepository) { };

    /**
     * Função responsável criar um novo usuário no banco de dados.
     * 
     * @param Object - {@link IRequest}
     * 
     * @returns Void
     */
    async execute({ email, name, password }: IRequest): Promise<void> {
        const userAlreadyExist = await this.userRepositories.findByEmail(email);

        if (userAlreadyExist) {
            throw new Error("User Already Exists!");
        }

        const passwordHash = await hash(password, 8)

        await this.userRepositories.create({ email, name, password: passwordHash });
    }
}

export { CreateUserUseCase };