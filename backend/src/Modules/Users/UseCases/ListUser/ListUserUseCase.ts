import { IUserRepository } from "../../Repositories/IUserRepository";


class ListUserUseCase {
    constructor(private userRepositories: IUserRepository) { };

    execute() {
        return this.userRepositories.list();
    }
};

export { ListUserUseCase };