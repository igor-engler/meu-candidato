import { IUserRepository } from "../../Repositories/IUserRepository";

/**
 * Classe responsável por listar todos os usuário.
 *
 * @property userRepositories - {@link IUserRepository}
 *
 * @exports ListUserUseCase
 */
class ListUserUseCase {
    constructor(private userRepositories: IUserRepository) { };

    /**
     * Função responsável por listar todos os usuário cadastrados.
     *
     * @returns Retorna uma lista com todos os usuário cadastrados.
     */
    execute() {
        return this.userRepositories.list();
    }
};

export { ListUserUseCase };