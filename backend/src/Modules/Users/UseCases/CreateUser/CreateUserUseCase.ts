import { IUserRepository } from "../../Repositories/IUserRepository";

interface IRequest {
    email: string;
    name: string;
    password: string;
}

class CreateUserUseCase {
    constructor(private userRepositories: IUserRepository) { };

    execute({ email, name, password }: IRequest) {
        const userExist = this.userRepositories.findByEmail(email);

        if (userExist) {
            throw new Error("User Already Exists!");
        }

        this.userRepositories.create({ email, name, password });
    }
}

export { CreateUserUseCase };