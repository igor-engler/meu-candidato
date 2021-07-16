import { IUserRepositories } from "../Repositories/IUserRepositories";

interface IRequest {
    email: string;
    name: string;
    password: string;
}

class CreateUserService {
    constructor(private userRepositories: IUserRepositories) { };

    execute({ email, name, password }: IRequest) {
        const userExist = this.userRepositories.findByEmail(email);

        if (userExist) {
            throw new Error("User Already Exists!");
        }

        this.userRepositories.create({ email, name, password });
    }
}

export { CreateUserService };