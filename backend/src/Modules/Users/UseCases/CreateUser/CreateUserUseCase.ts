import { IUserRepository } from "../../Repositories/IUserRepository";

/**
 * Interface que contem os parâmetros do Request.
 *
 * @property email - String.
 * @property name - String.
 * @property password - String.
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
    execute({ email, name, password }: IRequest): void {
        const userExist = this.userRepositories.findByEmail(email);

        if (userExist) {
            throw new Error("User Already Exists!");
        }

        this.userRepositories.create({ email, name, password });
    }
}

export { CreateUserUseCase };